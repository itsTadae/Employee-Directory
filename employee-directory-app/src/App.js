import React, { useState } from "react";
import "./App.css";
import Table from "./components/table.js";
import { EmployeeContext } from "./components/EmployeeContext";

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
        <Table />
      </EmployeeContext.Provider>
    </div>
  );
}

export default App;
