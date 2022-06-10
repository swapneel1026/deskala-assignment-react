import React, { useState } from "react";
import { Dropdown, Table } from "react-bootstrap";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const DisplayRecords = () => {
  const [list, setList] = useState(JSON.parse(localStorage.getItem("records")));

  // console.log(list);

  const deleteRecord = (id) => {
    let newList = list.filter((item, idx) => {
      return Number(id) !== idx;
    });
    setList(newList);
    localStorage.setItem("records", JSON.stringify(newList));
  };
  let navigate = useNavigate();
  const recordCreate = () => {
    navigate("/createRecords");
  };

  return (
    <>
      <div
        style={{
          marginTop: "5rem",
        }}
      >
        <p style={{ textAlign: "left", marginLeft: "1rem" }}>
          Canditates List : {list.length}
        </p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Email</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {list.map((record, idx) => {
              return (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{record.name}</td>
                  <td>{record.dob}</td>
                  <td>{record.emailAddress}</td>
                  <td>
                    <Dropdown>
                      <Dropdown.Toggle
                        style={{
                          color: "#43b0ef",
                          background: "none",
                          border: "0.5px solid #43b0ef",
                        }}
                        id="dropdown-basic"
                      >
                        Shortlist
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item>Yes</Dropdown.Item>
                        <Dropdown.Item>No</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                  <td>
                    <Button
                      startIcon={<DeleteIcon />}
                      onClick={(e) => {
                        deleteRecord(e.target.value);
                        console.log(e.target.value);
                      }}
                      style={{ color: "#43b0ef" }}
                      value={idx}
                    ></Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>

      <p
        style={{
          color: "#43b0ef",

          position: "relative",
          left: "-30rem",
          bottom: "0.5rem",
          cursor: "pointer",
        }}
        onClick={recordCreate}
      >
        + Add new Candidate
      </p>
    </>
  );
};

export default DisplayRecords;
