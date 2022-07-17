import React, { useContext, useState } from 'react'
import './Navbar.scss';
import { SearchOutlined, LanguageOutlined, DarkModeOutlined, FullscreenExitOutlined, NotificationsNoneOutlined, ChatBubbleOutlineOutlined, ListOutlined } from '@mui/icons-material';
import YomaImg from '../../../assets/yoma.jpg';
import { AppContext } from '../../../context/darkModeContext';

const Navbar = () => {
  
  const context = useContext(AppContext)
  const {toggle} = context;

  const [icons] = useState([
    {
      id: 1,
      icon: <LanguageOutlined />,
      name: 'English',
    }, 
    {
      id: 2,
      icon: <DarkModeOutlined />, 
      onClick: toggle
    },
    {
      id: 3,
      icon: <FullscreenExitOutlined />
    },
    {
      id: 4,
      icon: <NotificationsNoneOutlined />
    },
    {
      id: 5,
      icon: <ChatBubbleOutlineOutlined />
    },
    {
      id: 6,
      icon: <ListOutlined />
    },
    {
      id: 7,
      img: YomaImg
    }
  ])

  

  return (
    <div className="navbar">
      <div className="wrapper">

        <div className="search">
          <input type="text" placeholder='Search...' />
          <SearchOutlined />
        </div>

        <div className="items">
          {icons.map(icon => (
            <React.Fragment key={icon.id}>
              <div className="item" >
                {icon.img ? (
                  <img src={icon.img} alt="yoma" className='nav__avatar'
                    onClick={() => alert('working')}
                  />
                ): 
                  (
                    <div 
                      key={icon.id} 
                      style={{display: 'flex', alignItems: 'center'}} 
                      >
                      <span className='icon' onClick={icon.onClick}>{icon.icon}</span>
                      {icon.name}
                    </div>
                  )
                }
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar