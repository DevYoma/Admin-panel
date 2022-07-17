import React from 'react'
import DataTable from '../../components/Dashboard/DataTable/DataTable';
import Navbar from '../../components/Dashboard/Navbar/Navbar';
import SidebarDash from '../../components/Dashboard/SidebarDash/SidebarDash';
import './List.scss';

const List = () => {
  return (  
    <div className="list">
      <SidebarDash />
      <div className="listContainer">
        <Navbar />
        <DataTable />
      </div>
    </div>
  )
}

export default List