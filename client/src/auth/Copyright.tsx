import React from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

const Copyright = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#f4f9ff",
        padding: "10px 0",
        textAlign: "center",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        {"Copyright © "}
        <Link color="inherit" to="https://2bcloud.io/">
          2BCloud
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
};

export default Copyright;
