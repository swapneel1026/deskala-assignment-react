import React, { useEffect, useState } from "react";
import "./SignupComponent.css";
import { Form, Button } from "react-bootstrap";
const SignupComponent = () => {
  const [task, setTask] = useState(
    localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")) : []
  );
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [signup, setSignup] = useState("Sign Up");

  const submitHandler = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "" && number !== "") {
      setTask([...task, { email, number, password }]);
      // console.log(task);
      setSignup("Signup Success ✅");
    } else {
      alert("Feild cant be left blank");
    }

    setTimeout(() => {
      setSignup("Signup");
    }, 3000);
  };

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);
  console.log(localStorage.getItem("task"));
  return (
    <div className="signupContainer">
      <h6 className="signupHeading">Signup</h6>
      <Form>
        <Form.Group className="mb-4 me-auto" controlId="formBasicEmail">
          <Form.Label className="me-auto text">Email address</Form.Label>
          <Form.Control
            required
            type="email"
            name="email"
            placeholder="Enter your email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPhoneNumber">
          <Form.Label className=" text">Phone Number</Form.Label>
          <Form.Control
            required
            type="tel"
            name="number"
            pattern="[1-9]{1}[0-9]{9}"
            placeholder="Enter your phone number(10-digits)"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label className=" text">Password</Form.Label>
          <Form.Control
            required
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Form.Text className="text-muted add">
            Minimum 8 Alpha-numeric
          </Form.Text>
        </Form.Group>

        <Button
          onClick={submitHandler}
          type="submit"
          style={{ backgroundColor: "#43b0ef", border: "none" }}
        >
          {signup}
        </Button>
      </Form>
    </div>
  );
};

export default SignupComponent;
