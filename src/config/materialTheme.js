import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
const theme = createMuiTheme({
	typography: {
		fontFamily: [
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"'
		].join(","),
		h1: {
			fontSize: "3rem"
		},
		h2: {
			fontSize: "2.5rem"
		},
		h3: { 
			fontSize: "2.25rem"
		}
	},
	shape: {
		borderRadius: "5px",
	},
	palette: {
		primary: {
			main: "#EA302B"
		},
		secondary: {
			main: "#18A0FB",
			dark: "#2b6692"
		}
	}
});

export default theme;
