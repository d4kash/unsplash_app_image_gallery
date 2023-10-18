import * as React from 'react';
import {Box,Card, CardContent,CardActionArea,CardMedia, CardActions, Avatar,
Grid,
Stack
} from '@mui/material';
import { Close } from '@mui/icons-material';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  // top: '50%',
  // left: '50%',
  // transform: 'translate(-50%, -50%)',
  width: '40%',
  // height:'10px',
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  // boxShadow: 24,
  p: 4,
  // maxWidth: 345
};

export default function ImageDetailModal() {
  const [open, setOpen] = React.useState(false);
  const [tags, setTags] = React.useState(['Animals','Animals iamges & Pictures','Nature','Giant animals','Forst animals','Animal pictures']);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
      >*/}
        <Box 
        sx={{ 
         margin:'15vh auto',
          justifyContent:'center',
          // position:'absolute',
          width: 700,
          height: 350,}}
        > <Stack>

          <Card >
          <CardActionArea>
            <Stack>
            <Close sx={{
              bgcolor:"white",
              "&:hover":{bgcolor:"white",opacity:0.6},
              borderRadius:8,
              position:"absolute", top:10,right:10}} color="primary"/>
        <CardMedia
         sx={{  
          
          width: 700,
          height: 350,}}
          component="img"
          // height="140"
          image="https://images.unsplash.com/photo-1586810724476-c294fb7ac01b?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&w=500"
          // image="../../../public/assets/images/unsplash_image.jpg"
          alt="green iguana"
          />
          </Stack>
        <CardContent>
         <Box sx={{display:"flex", paddingRight:"20px"}}>
          <Avatar src='https://images.unsplash.com/photo-1546464677-c25cd52c470b?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&w=500'></Avatar>
        <Box sx={{ paddingLeft:"8px", justifyContent:"start"}}>
           <Typography variant="body2" color="black" style={{fontSize:"15px",fontWeight:"bold"}}>
            Jacob Jones
          </Typography>
          
          <Typography variant="body2" color="grey" style={{fontSize:"11.5px"}}>
            @jacobclicks
          </Typography>
          </Box> 
         </Box>
         <Box sx={{ paddingRight:"20px",}}>
        <Box sx={{ paddingBottom:"12px", }}>
           <Typography variant="body2" color="black" style={{fontSize:"15px",fontWeight:"bold"}}>
            Related Tags
          </Typography>
          </Box>
          <Grid container spacing={2}>
          {tags.map ((tags)=>{
          return <Box sx={{padding:0.5}}>
           <Typography sx={{padding:0.5}} variant="body2" color="grey" style={{fontSize:"11px",
 borderRadius: 4, border: '1px solid #000',}}>
            {tags}
          </Typography>
           </Box>})}
          </Grid> 
         </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
          </Card>
          
          </Stack>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
         </Box>
     {/* </Modal> */}
    </div>
  );
}
