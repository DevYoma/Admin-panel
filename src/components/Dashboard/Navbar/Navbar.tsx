import React, { useState } from 'react'
import './Navbar.scss';
import { SearchOutlined, LanguageOutlined, DarkModeOutlined, FullscreenExitOutlined, NotificationsNoneOutlined, ChatBubbleOutlineOutlined, ListOutlined } from '@mui/icons-material';
import YomaImg from '../../../assets/yoma.jpg';

const Navbar = () => {
  const [icons] = useState([
    {
      id: 1,
      icon: <LanguageOutlined />,
      name: 'English',
    }, 
    {
      id: 2,
      icon: <DarkModeOutlined />
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
                    <div style={{display: 'flex', alignItems: 'center'}}>
                      <span className='icon'>{icon.icon}</span>
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