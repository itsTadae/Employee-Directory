import React, { useState } from "react";
import "./table.css";
import { EmployeeContext } from "./EmployeeContext.js";

function Table() {
  const [url] = useState("https://randomuser.me/api/?results=10");

  const [sortEmployee] = fetchURL(url);

  const [displayEmployee] = useContext(EmployeeContext);

  return (
    <table>
      <thead>
        <tr>
          <td onClick={() => sortEmployee("name")}>
            <Button>First Name</Button>
          </td>
          <td>Last Name</td>
          <td>Gender</td>
          <td>E-Mail</td>
        </tr>
      </thead>
      <tbody>
        {displayEmployee.map((employee) => {
          return (
            <tr key={employee.login.uuid}>
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

