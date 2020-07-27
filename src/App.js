import React, { useState } from "react";
import "./App.css";
import Table from "./components/js/table.js";
import { EmployeeContext } from "./components/js/EmployeeContext";
import Navbar from "./components/js/navbar"

function App() {
  const [employees, fetchEmployee] = useState([]);
  const [displayedEmployees, displayEmployee] = useState([]);

  return (
    <div className="App">
      <EmployeeContext.Provider
        value={{
          employees,
          fetchEmployee,
          displayedEmployees,
          displayEmployee,
        }}
      >
        <Navbar />
        <Table />
      </EmployeeContext.Provider>
    </div>
  );
}

export default App;
