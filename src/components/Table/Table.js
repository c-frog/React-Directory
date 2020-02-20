import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
// import TableHeader from '../TableHeader';
import Nav from '../Search/Search';


const Table = () => {
   const [users, setUsers] = useState([]);
   const [filteredUsers, setFilteredUsers] = useState([]);
   const [sortOrder, setSortOrder] = useState('ascend');


   useEffect(() => {
      API.getUsers()
         .then(results => {
         setUsers(results.data.results)
         setFilteredUsers(results.data.results)
      })
   }, [setSortOrder]);

   const searchFilter = (e) => {
      const filter = e.target.value;
      const filteredUserList = users.filter(item => {
         let values = Object.values(item).join("").toLowerCase();
         return values.indexOf(filter.toLowerCase()) !== -1;
      });
      setFilteredUsers(filteredUserList);
   }

   const sortNames = () => {
      if (sortOrder) {
      console.log(filteredUsers)
      filteredUsers.sort((a,b) => a.name.first.localeCompare(b.name.first));
      setFilteredUsers(filteredUsers);
      }
   }
   
   return (
      <>
         <Nav searchFilter={searchFilter} />

         <button type="butto" className="btn btn-primary mt-2" onClick={sortNames} >Sort Names</button>

         <table className='table table-hover mt-5'>
               <tbody>
                  {/* <TableHeader /> */}
                  {filteredUsers.map(({ login, name, picture, phone, email, dob }) => {
                     return (

                           <tr key={login.uuid}>
                              <td> <img src={picture.thumbnail} alt={name} /></td>
                              <td>{name.first} {name.last}</td>
                              <td>{phone}</td>
                              <td>{email}</td>
                              <td>{dob.age}</td>
                           </tr>
                     )
                  })}
               </tbody>
         </table>


      </>
   )

}

export default Table;