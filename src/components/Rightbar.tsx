import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material'
import React from 'react'
import ConversationList from './ConversationList';

const Rightbar = () => {
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    // {
    //   img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    //   title: 'Coffee',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    //   title: 'Hats',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    //   title: 'Honey',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    //   title: 'Basketball',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    //   title: 'Fern',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    //   title: 'Mushrooms',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    //   title: 'Tomato basil',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    //   title: 'Sea star',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    //   title: 'Bike',
    // },
  ];
  return (
    <Box
        flex={2}
        p={2} //padding 2
        sx={{ display: { xs: 'none', sm: 'block' } }} // xs display => none, sm => block
    >
      <Box
        position="fixed"
        width={300}
      >
        <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>

        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>

        <ImageList cols={3} rowHeight={100} gap={5}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>

        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Conversations
        </Typography>

        {/* latest conversations list */}
        <ConversationList />
      </Box>
    </Box>
  )
}

export default Rightbar