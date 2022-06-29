import React, { useState } from 'react'
import Post from './Post'
import { Box  } from '@mui/material';
import { DateRange } from '@mui/icons-material';

const Feed = () => {
  const [datas] = useState([
    {
      id: 1, 
      image: 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Emore Ogheneyoma',
      date: 'June 25, 2022'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/11035386/pexels-photo-11035386.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Julio Codes',
      date: 'June 25, 2022'
    },
    {
      id: 3, 
      name: 'Moshenko',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'June 24, 2022'
    },
    {
      id: 4, 
      name: 'Kyle',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'June 23, 2022' 
    },
    {
      id: 5,
      name: 'Victoria',
      image: 'https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'June 20, 2022'
    },
    {
      id: 6,
      name: 'Sonia',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'July 19, 2022'
    }
  ])
  return (
   <Box flex={4} p={2}>
      {
        datas.map(data => (
          <Post 
            id={data.id} 
            name={data.name}
            image={data.image}
            date={data.date}
          />
        ))
      }
   </Box>
  )
}

export default Feed