import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const AppBar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0.5rem",
      }}
    >
      <div>
        <Typography variant="h4">EduMe</Typography>
      </div>
      <div>
          <Button
            style={{ marginRight: "10px" }}
            size="medium"
            variant="contained"
            onClick={()=>{
                window.location="/signup"
            }}
          >
            Sign up
          </Button>
          <Button size="medium" variant="contained" onClick={()=>{
                window.location="/login"
            }}>
            Sign In
          </Button>
      </div>
    </div>
  );
};

export default AppBar;
