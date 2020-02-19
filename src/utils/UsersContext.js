import React from "react";

const UsersContext = React.createContext({
   users: [],
   searchTerm: ""
});

export default UsersContext;