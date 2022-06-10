import React, { useState } from "react";
import "./LoginComponent.css";
import { Form, Button } from "react-bootstrap";
const LoginComponent = () => {
  const [loginemail, setLoginemail] = useState("");
  const [loginpassword, setLoginpassword] = useState("");

  let local = JSON.parse(localStorage.getItem("task"));
  // console.log(local);

  let usermatch = local.map((item) => {
    return item.email;
  });
  let passmatch = local.map((item) => {
    return item.password;
  });

  // console.log(usermatch, passmatch);

  const loginValidate = () => {
    if (usermatch.includes(loginemail) && passmatch.includes(loginpassword)) {
      alert("logged in succesfully");
    } else {
      alert("check your credentials");
    }
  };
  return (
    <div className="loginContainer">
      <h6 className="loginHeading">Login</h6>
      <Form>
        <Form.Group className="mb-4 me-auto" controlId="formBasicEmail">
          <Form.Label className="me-auto text">Email address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter your email id"
            value={loginemail}
            onChange={(e) => {
              setLoginemail(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label className="text">Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Enter your password"
            value={loginpassword}
            onChange={(e) => {
              setLoginpassword(e.target.value);
            }}
          />
          <Form.Text className="text-muted add">
            Minimum 8 Alpha-numeric
          </Form.Text>
        </Form.Group>

        <Button
          onClick={loginValidate}
          type="submit"
          style={{ backgroundColor: "#43b0ef", border: "none" }}
        >
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginComponent;
