import React from "react";
import { Button, Typography } from "@mui/material";
import { Add, Settings } from "@mui/icons-material";
import styled from "@emotion/styled";
const App = () => {
	const BlueButton = styled(Button)({
		backgroundColor: "skyblue",
		color: "#888",
		margin: 5,
		"&:hover": {
			backgroundColor: "lightblue",
		},
		"&:disabled": {
			backgroundColor: "gray",
			color: "white",
		},
	});
	return (
		<div>
			<Button variant="text">Text</Button>
			<Button startIcon={<Settings />} variant="contained" color="secondary">
				Settings
			</Button>
			<Button startIcon={<Add />} variant="contained" color="success">
				Add new post
			</Button>
			<Button variant="outlined" size="small">
				Outlined
			</Button>

			<Typography variant="h1" component="p">
				It uses h1 style but is p tag.
			</Typography>

			<BlueButton>My unique button 1</BlueButton>
			<BlueButton>My unique button 2</BlueButton>
		</div>
	);
};

export default App;
