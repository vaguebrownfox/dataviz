// Modules
import * as React from "react";
import createEmotionServer from "@emotion/server/create-instance";

// Utils
import theme from "../src/styles/theme";
import createEmotionCache from "../src/utils/createEmotionCache";

// Components
import Document, { Html, Head, Main, NextScript } from "next/document";
import { PROJECT_DESC, PROJECT_LINK, PROJECT_NAME } from "../src/utils/config";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					{/* PWA primary color */}
					<meta
						name="theme-color"
						content={theme.palette.primary.main}
					/>
					<link rel="shortcut icon" href="/icon/favicon.ico" />
					<link rel="dns-prefetch" href="//fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="//fonts.gstatic.com/"
						crossOrigin="anonymous"
					/>
					<link
						rel="stylesheet"
						href="//fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap"
					/>

					<meta property="og:type" content="website" />
					<meta property="og:url" content={PROJECT_LINK} />
					<meta property="og:title" content={PROJECT_NAME} />
					<meta property="og:description" content={PROJECT_DESC} />
					<meta property="og:site_name" content={PROJECT_NAME} />
					<meta property="og:locale" content="en_US" />
					<meta name="twitter:card" content="summary" />
					<meta name="twitter:creator" content="@vaguebrownfox" />
					<meta name="twitter:url" content={PROJECT_LINK} />
					<meta name="twitter:title" content={PROJECT_NAME} />
					<meta name="twitter:description" content={PROJECT_DESC} />

					{/* Inject MUI styles first to match with the prepend: true configuration. */}
					{this.props.emotionStyleTags}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
	// Resolution order
	//
	// On the server:
	// 1. app.getInitialProps
	// 2. page.getInitialProps
	// 3. document.getInitialProps
	// 4. app.render
	// 5. page.render
	// 6. document.render
	//
	// On the server with error:
	// 1. document.getInitialProps
	// 2. app.render
	// 3. page.render
	// 4. document.render
	//
	// On the client
	// 1. app.getInitialProps
	// 2. page.getInitialProps
	// 3. app.render
	// 4. page.render

	const originalRenderPage = ctx.renderPage;

	// You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
	// However, be aware that it can have global side effects.
	const cache = createEmotionCache();
	const { extractCriticalToChunks } = createEmotionServer(cache);

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App) =>
				function EnhanceApp(props) {
					return <App emotionCache={cache} {...props} />;
				},
		});

	const initialProps = await Document.getInitialProps(ctx);
	// This is important. It prevents emotion to render invalid HTML.
	// See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
	const emotionStyles = extractCriticalToChunks(initialProps.html);
	const emotionStyleTags = emotionStyles.styles.map((style) => (
		<style
			data-emotion={`${style.key} ${style.ids.join(" ")}`}
			key={style.key}
			// eslint-disable-next-line react/no-danger
			dangerouslySetInnerHTML={{ __html: style.css }}
		/>
	));

	return {
		...initialProps,
		emotionStyleTags,
	};
};
