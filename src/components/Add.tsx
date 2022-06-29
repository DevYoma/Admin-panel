import { Avatar, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import { useState } from 'react'
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import { Box } from '@mui/system'
import styled from '@emotion/styled'

const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'center',
    gap: "10px",
    marginBottom: "20px"
})

const Add = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
        <Tooltip 
            title="Post" sx={{position: 'fixed', bottom: 20, left: {xs: "calc(50% - 25px)", md: 30}}}
            onClick={() => setOpen(true)}
        >
            <Fab color='primary' aria-label="add">
                <AddIcon />
            </Fab>
        </Tooltip>

        <Modal
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
                <Typography variant="h6" color='gray' textAlign="center">
                    Create Post
                </Typography>
                <UserBox>
                    <Avatar 
                        // src={{}}
                        sx={{ width: 30, height: 30 }}
                    />
                    <Typography fontWeight={500}>
                        Emore Ogheneyoma
                    </Typography>
                </UserBox>
                <TextField
                    sx={{width: '100%'}}
                    id="standard-multiline-static"
                    multiline
                    rows={3}
                    placeholder="What's on your mind"
                    variant="standard"
                />
                <Stack direction="row" gap={1} mt={2} mb={3}>
                    <EmojiEmotions color='primary'/>
                    <Image color='secondary'/>
                    <VideoCameraBack color='success'/>
                    <PersonAdd color='error' />
                </Stack>

                <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
                    <Button>Post</Button>
                    <Button sx={{ width: "100px" }}>
                        <DateRange />
                    </Button>
                    {/* <Button>Three</Button> */}
                </ButtonGroup>
            </Box>
      </Modal>
    </>
  )
}

export default Add