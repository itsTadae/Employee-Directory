import { useEffect, useContext } from "react";
import { EmployeeContext } from "../components/js/EmployeeContext";
import axios from "axios";
// useGet hook 
export function useGet(url) {
  const {
    employees,
    fetchEmployee,
    displayEmployee,
    displayedEmployees,
  } = useContext(EmployeeContext);

  // useEffect to fetch employee data and replace lifecycle methods
  useEffect(() => {
    async function fetchEmployees() {
      try {
        const response = await axios.get(url);

        fetchEmployee(response.data.results);

        displayEmployee(response.data.results);
      } catch (err) {
        console.log("Error with API:", err);
      }
    }
    fetchEmployees();
  }, 
  // populate array
  []);
  // function to sort by first name
  function sortName() {
    employees.sort(function (a, b) {
      if (a.name.first < b.name.first) {
        return -1;
      } else {
        return 1;
      }
    });
    displayEmployee([...employees]);
  }

  
  

  return { displayedEmployees, sortName };
}
