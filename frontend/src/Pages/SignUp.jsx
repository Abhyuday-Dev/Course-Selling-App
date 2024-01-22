import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const SignUp = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
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
            onChange={(e)=>{
              setEmail(e.target.value);
            }}
            fullWidth={true}
            label="Email"
            variant="outlined"
            style={{ marginBottom: "10px" }}
          />
          <TextField
            onChange={(e)=>{
              setPassword(e.target.value);
            }}
            fullWidth={true}
            label="Password"
            variant="outlined"
            style={{ marginBottom: "10px" }}
          />
          <Button 
          size={"large"}
          variant="contained"
          onClick={()=>{
            fetch("http://localhost:3000/admin/signup",{
                method:"POST",
                body:JSON.stringify({
                    username:email,
                    password:password
                }),
                headers:{
                  "Content-Type": "application/json",
                }
            })
            .then((res)=>{
              return res.json();
            })
            .then((data)=>{
              localStorage.setItem("token",data.token);
              window.location="/";
              console.log(data);
            })
          }}>
            SignUP
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default SignUp;
