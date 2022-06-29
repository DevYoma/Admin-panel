import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'

type PostProps = {
  id:number;
  name: string;
  image: string;
  date: string;
}

const Post = ({ id, name, image, date}: PostProps) => {
  return (
    <Box flex={4}p={2} >  
      <Card sx={{margin: 5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            {name.split("").shift()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={name}
        subheader={date}
      />
      <CardMedia
        component="img"
        // height="20%"
        image={image}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          {/* <Favorite /> */}
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: 'red'}} />} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
      </Card>
    </Box>
  )
}

export default Post