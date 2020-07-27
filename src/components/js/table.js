import React, { useState, useContext } from "react";
import "../css/table.css";
import { EmployeeContext } from "./EmployeeContext.js";
import Button from "./button.js";
import { useGet } from "../../hooks/API.js";

function Table() {
  // save state of our employee results
  const [url] = useState("https://randomuser.me/api/?results=10");

  const { sortName } = useGet(url);

  const { displayedEmployees } = useContext(EmployeeContext);
  // create new table with our random employee results attached
  return (
    <table class="striped">
      <thead>
        <tr>
          <td onClick={() => sortName("name")}>
            <Button>First Name</Button>
          </td>
          <td>Last Name</td>
          <td>Gender</td>
          <td>E-Mail</td>
          <td>Age</td>
        </tr>
      </thead>
      <tbody>
        {displayedEmployees.map((employee) => {
          return (
            <tr>
              <td>{employee.name.first}</td>
              <td>{employee.name.last}</td>
              <td>{employee.gender}</td>
              <td>{employee.email}</td>
              <td>{employee.dob.age}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
