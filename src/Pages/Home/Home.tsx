import React from 'react'
import Navbar from '../../components/Dashboard/Navbar/Navbar';
import Widget from '../../components/Dashboard/DWidget/Widget';
import SidebarDash from '../../components/Dashboard/SidebarDash/SidebarDash';
import './Home.scss';
import Featured from '../../components/Dashboard/Featured/Featured';
import Chart from '../../components/Dashboard/Chart/Chart';
import Table from '../../components/Dashboard/Table/TableList';
import TableList from '../../components/Dashboard/Table/TableList';

const Home = () => {
  return (
    <div className="home">
      <SidebarDash />

      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type='user'/>
          <Widget type='order'/>
          <Widget type='earning'/>
          <Widget type='balance'/>
        </div>

        <div className="charts">
          <Featured />
          <Chart aspect={2 /1 }/>
        </div>

        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <TableList />
        </div>
      </div>
    </div>
  )
}

export default Home