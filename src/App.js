import React, { useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Search from "./components/search/Search";
import Result from "./components/Table/Table";
import UsersContext from "./utils/UsersContext";
import API from "./utils/API";

function App() {
  
  const [usersState, setUsersState] = useState({
    users: [],
    searchTerm: ""
  });

  function handleClick(searchedFor) {
    setUsersState({ ...usersState, searchTerm: searchedFor });
  }

  useEffect(() => {
    API.search().then(res => {
      setUsersState({ ...usersState, users: res.data.results });
    });
    return () => {
      console.log("Sorting...");
    };
  }, []);

  return (
    <>
      <div className="App">
        <div className="jumbotron">
          <h1 className="title">Employee-Tracker</h1>
        </div>
        <UsersContext.Provider value={usersState}>
          <div className="searchDiv">
            <Search handleClick={handleClick} />
          </div>
          <div className="resultsDisplay">
            <Result />
          </div>
        </UsersContext.Provider>
      </div>
    </>
  );
}


export default App;
