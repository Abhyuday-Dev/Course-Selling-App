import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const SignIn = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#eeeeee",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h5">Welcome To EduMe.Sign Up below</Typography>
      <Card variant="outlined" style={{ width: "500px", padding: "1rem" }}>
        <div
          className="form"
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0.8rem",
          }}
        >
          <TextField
            fullWidth={true}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            style={{ marginBottom: "10px" }}
          />
          <TextField
            fullWidth={true}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            style={{ marginBottom: "10px" }}
          />
           <Button size={"large"} variant="contained">
          SignIn
        </Button>
        </div>
        
      </Card>
    </div>
  );
};

export default SignIn;
