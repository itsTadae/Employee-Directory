import React, { useState, useContext } from "react";
import { EmployeeContext } from "./EmployeeContext.js";
import "../css/searchBox.css";

function Search() {
  // set search state
  const [search, saveSearch] = useState("");
  // set employee context state
  const { employees, displayEmployee } = useContext(EmployeeContext);

  function Refresh({ target }) {
    const searchValue = target.value;
    // save name to equal target value of search bar
    saveSearch(searchValue);
    // filter employees by first name
    const filterEmployees = employees.filter(function (employee) {
      return employee.name.first
        .toLowerCase()
        .indexOf(searchValue.toLowerCase()) !== -1
        ? // if letter matches the name, display
          true
        : // if not, remove name from the list
          false;
    });
    // display list of filtered employees
    displayEmployee([...filterEmployees]);
  }

  // html for search Box
  return (
    <div className="container-fluid">
      <header className="z-depth-3 col s12">
        <div className="row">
          <div className="col s6">
            <h3 className="right-align headerText">Employee Directory</h3>
          </div>
          <div className="row">
            <div className="col s3 searchField right-align ">
              <input
                type="text"
                onChange={Refresh}
                value={search}
                placeholder="Search by first name"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Search;
