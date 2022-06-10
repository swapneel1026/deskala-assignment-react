import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./CreateRecords.css";
import { states } from "./Statelist";
import { useNavigate } from "react-router-dom";
import CachedIcon from "@mui/icons-material/Cached";

const CreateRecords = () => {
  const [records, setRecords] = useState(
    localStorage.getItem("records")
      ? JSON.parse(localStorage.getItem("records"))
      : []
  );
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [dob, setDob] = useState("");
  const [state, setState] = useState("");
  const [age, setAge] = useState("");
  const [pincode, setPincode] = useState("");
  const [button, setButton] = useState("Create");

  const clickall = (e) => {
    e.preventDefault();
    if (
      name !== "" &&
      emailAddress !== "" &&
      dob !== "" &&
      state !== "" &&
      age !== "" &&
      pincode !== ""
    ) {
      setRecords([
        ...records,
        { name, emailAddress, dob, state, age, pincode },
      ]);
      setButton("Created✅");
    } else {
      alert("All feilds are required");
    }
    // console.log(records);
    setTimeout(() => {
      setButton("Create");
    }, 2000);
  };
  useEffect(() => {
    localStorage.setItem("records", JSON.stringify(records));
  }, [records]);
  const resetall = (e) => {
    e.preventDefault();
    setName("");
    setEmailAddress("");
    setAge("");
    setPincode("");
    setState("");
    setDob("");
  };
  let navigate = useNavigate();
  const recordCreateCancel = () => {
    navigate("/viewRecords");
  };
  return (
    <>
      <div className="recordsContainer">
        <CachedIcon
          style={{ left: "50%", position: "relative", cursor: "pointer" }}
          onClick={resetall}
        />
        <h6 className="heading">Create Candidate</h6>
        <Form className="form">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="text">Name</Form.Label>
              <Form.Control
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                type="text"
                placeholder="Enter your name"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label className="text">Email Address</Form.Label>
              <Form.Control
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                required
                type="email"
                placeholder="Enter your address"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="text">Date of Birth</Form.Label>
              <Form.Control
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                type="date"
                placeholder="Enter your date of birth"
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label className="text">State</Form.Label>
              <Form.Select
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
                defaultValue="Choose State..."
              >
                {states.map((st, idx) => {
                  return <option key={idx}>{st.name}</option>;
                })}
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="text">Age</Form.Label>
              <Form.Control
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
                type="number"
                placeholder="Enter your age"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label className="text">Pincode</Form.Label>
              <Form.Control
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                required
                pattern="[1-9]{6}"
                type="number"
                placeholder="Enter your pincode"
              />
            </Form.Group>
          </Row>
          <div className="Container">
            <Button
              className="button"
              onClick={recordCreateCancel}
              style={{
                background: "none",
                color: "black",
                fontWeight: "bold ",
                border: "1px solid #43b0ef ",
              }}
            >
              Cancel
            </Button>

            <Button
              onClick={clickall}
              className="button"
              type="submit"
              style={{
                backgroundColor: "#43b0ef",
                color: "white",
                fontWeight: "bold",
                border: "none",
              }}
            >
              {button}
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default CreateRecords;
