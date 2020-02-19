import React from 'react';

const Nav = ({ searchFilter }) => {


   return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
         </button>

         <div className="collapse navbar-collapse" id="navbarColor01">
               <form className="form-inline my-2 my-lg-0">
                  <input
                     className="form-control mr-sm-2"
                     type="search"
                     placeholder="Search"
                     onChange={e => searchFilter(e)}
                  />
               </form>
         </div>
      </nav>
   )
}

export default Nav;