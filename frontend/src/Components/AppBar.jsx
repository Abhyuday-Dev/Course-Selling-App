import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const AppBar = () => {
  const [userEmail, setUserEmail] = useState(null);
  const [isLoading,setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/admin/me", {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.username) {
          setUserEmail(data.username);
          setIsLoading(false);
        }
      });
  }, []);
  if(isLoading) {
    <div></div>
  }
  if (userEmail) {
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
        <div style={{display:"flex"}}>
          <Typography>{userEmail}</Typography>
          <Button
            size="medium"
            variant="contained"
            onClick={() => {
              window.location = "/";
              localStorage.setItem("token",null);
            }}
          >
            Logout
          </Button>
        </div>
      </div>
    );
  } else {
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
            onClick={() => {
              window.location = "/signup";
            }}
          >
            Sign up
          </Button>
          <Button
            size="medium"
            variant="contained"
            onClick={() => {
              window.location = "/login";
            }}
          >
            Sign In
          </Button>
        </div>
      </div>
    );
  }
};

export default AppBar;
