import React from "react";
import "./search.css";

function Form({ handleClick }) {
   
return (
   <>
   <h2>Search Employees</h2>
   <form>
      <div className=" input-group">
         <input
         type="text"
         className="form-control"
         id="inputFiels"
         placeholder="John Doe"
         />
         <div className="input-group-append">
         <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={event => {
               let searchedFor =
               event.target.parentNode.previousElementSibling.value;
               handleClick(searchedFor);
            }}
         >
            Search
         </button>
         </div>
      </div>
      <small id="searchHelp" className="form-text text-muted">
         Search for employee/s by name
      </small>
   </form>
   </>
);
}

export default Form;