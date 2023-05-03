import * as React from 'react';
import { Card, CardContent, Grid, TextField, FormControl, Button, Link, Typography, Modal, Box, } from "@mui/material";
import { Container } from "@mui/system";
import CloseIcon from '@mui/icons-material/Close';
import jennie from '../../../img/jennie.jpg'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 2,
    width: "31.5%",
    height: "80%",
    marginTop: "2%",
    borderRadius: 1.3
  };

function Register() {



    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


 

  return (

<>
        <Container maxWidth style={{alignSelf: "center", alignContents: "center", height: "100%", }}>
            <Grid container spacing={2} style={{ backgroundColor: '#F0F2F5', height: "100vh", width: "100vw"}}>
                <Grid style={{alignItems: "center", alignContents:"center", marginLeft: "10%", alignSelf: "center" }} >
                    <CardContent style= {{ alignItems: "center", alignContents:"center"}}>
                        <Typography gutterBottom variant="h5" component="div" style={{color:"#1877f2", fontSize: 60, fontWeight: "bolder" }}>
                            facebook
                        </Typography>
                        <Typography variant="h5" component="div">
                        Connect with friends and the world around you on Facebook.
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid  style={{alignItems: "center", alignContents:"center", alignSelf: "center"}} >
                   <Card sx={{ maxWidth: 500}} style={{ width: "100vw", alignContents: "center", alignSelf: "center", marginBottom: "10%"}} >
                        <CardContent>
                            <FormControl fullWidth a>
                                <TextField variant="outlined" placeholder="Email" label="Email" />
                                <TextField variant="outlined" placeholder="Password" type="password" label="Password" style={{marginTop: 15, marginBottom: 15}} />
                                <Button variant="contained" size="large" style={{backgroundColor:"#1877f2" }}  onClick={handleOpen}>Login</Button>
                                <Link href="#" underline="none" style={{marginBottom: 20, marginTop: 15,  alignSelf: "center"}}>{'Forgot Password?'}</Link>
                                 <div style={{ display: "flex", alignItems: "center" }}>
                                        <div style={{ flex: 1, backgroundColor: "#BDBDBD", height: "1px", marginBottom: 20}} />
                                </div>
                                <Button variant="contained" color="success" style={{backgroundColor:"#42b72a", marginBottom:10, marginTop:10}}
                                    onClick={handleOpen} >Create Account</Button>
                                <Modal
                                
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description">

                                    <Box sx={style} style={{padding: 10, height: "30%", width: "50%"}}>
                                        
                                        <Button style={{position: 'absolute', right: 0}}
                                           onClick={handleClose}
                                            ><CloseIcon></CloseIcon></Button>
                                        <img style={{height: "100%", width: "100%"}} src={jennie} alt="log" /> 
                                        
                                              
                                    </Box>
                                </Modal>
                            </FormControl>
                            
                        </CardContent>
                   </Card>
                </Grid>

            </Grid>
        </Container>

    </>
  )
}
export default Register