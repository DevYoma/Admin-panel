import { AccountCircleOutlined, BarChartSharp, CreditCardOutlined, Dashboard, DeliveryDining, ExitToAppOutlined, NotificationsNone, Person, PsychologyOutlined, SettingsApplications, SettingsSystemDaydreamOutlined, Store } from '@mui/icons-material';
import './SidebarDash.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../../context/darkModeContext';
import { AuthContext } from '../../../context/AuthContext';

const SidebarDash = () => {

  // using the context
  // const {  dispatch } = useContext(DarkModeContext)
  const context = useContext(AppContext);

  const {darkMode, light, dark} = context;
  // console.log(darkMode);

  // we are dispatching actions through the reducer here

  const authContext = useContext(AuthContext);
  const {logout} = authContext;
 
  return (
    <div className="sidebar">
        <div className="top">
          <Link to={'/'} style={{ textDecoration: 'none' }} >
            <span className="logo">yomaAdmin</span>
          </Link>
        </div>
        <hr />
        <div className="center">
          <ul>
            <p className="title">MAIN</p>
            
            <Link to={'/'} style={{ textDecoration: 'none' }} >
            <li>
              <Dashboard className="icon"/>
              <span>Dashboard</span>
            </li>
            </Link>

            <p className="title">LISTS</p>

            <Link to={'/users'} style={{ textDecoration: 'none' }} >
              <li> 
                <Person className="icon"/>
                <span>Users</span>
              </li>
            </Link>


            <Link to={'/products'} style={{ textDecoration: 'none' }} >
              <li>
                <Store className='icon'/>
                <span>Products</span>
              </li>
            </Link>
            
            <li>
              <CreditCardOutlined className="icon"/>
              <span>Orders</span>
            </li>
            <li>
              <DeliveryDining className="icon"/>
              <span>Delivery</span>
            </li>

            <p className="title">USEFUL LINKS</p>

            <li>
              <BarChartSharp className="icon"/>
              <span>Stats</span>
            </li>
            <li>
              <NotificationsNone className="icon"/>
              <span>Notifications</span>
            </li>

            <p className="title">SERVICE</p>

            <li>
              <SettingsSystemDaydreamOutlined className="icon"/>
              <span>System Health</span>
            </li>
            <li>
              <PsychologyOutlined className="icon"/>
              <span>Logs</span>
            </li>

            <li>
              <SettingsApplications className="icon"/>
              <span>Settings</span>
            </li>

            <p className="title">USER</p>

            <li>
              <AccountCircleOutlined className="icon"/>
              <span>Profile</span>
            </li>
            <li onClick={() => logout()}>
              <ExitToAppOutlined className="icon"/>
              <span>Logout</span>
            </li>
          </ul>
        </div>


        <div className="bottom">
          <div className="colorOption" onClick={light}></div>
          <div className="colorOption" onClick={dark}></div>
        </div>
    </div>
  )
}

export default SidebarDash