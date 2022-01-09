import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: "#000",
		},
		secondary: {
			main: "#19857b",
			light: "#AAA",
		},
		error: {
			main: red.A400,
		},
	},
});

export default theme;
