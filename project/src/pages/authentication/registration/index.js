import * as React from 'react';
import { useState } from "react"
import axios from "axios";
import { Card, CardContent, Grid, TextField, FormControl, Button, Link, Typography, Modal, Box, FormControlLabel, Radio, RadioGroup  } from "@mui/material";
import { Container } from "@mui/system";
import CloseIcon from '@mui/icons-material/Close';


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
    const [data, setData] = useState({
        first_name: '',
        last_name:'',
        email: '',
        password: '', 
        gender: '',
        birthdate:''
    })

    function formatDate(year, month, day) {
        const date = new Date(year, month, day)
        const yearString = String(date.getFullYear())
        const monthString = String(date.getMonth())
        const dayString = String(date.getDate())
        return `${yearString}-${monthString}-${dayString}`
      }


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [errorPassword, setErrorPassword] = useState('')

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
                                <Button variant="contained" size="large" style={{backgroundColor:"#1877f2" }}>Login</Button>
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

                                    <Box sx={style} style={{padding: 15}}>
                                        
                                        <Button style={{position: 'absolute', right: 0}}
                                           onClick={handleClose}
                                            ><CloseIcon></CloseIcon></Button>

                                        <Typography style={{fontSize:32, fontWeight:"bold"}}>
                                            Sign Up
                                            
                                        </Typography>
                                        

                                        <Typography style={{fontSize:11}}>
                                            {errorPassword}
                                        </Typography>
                                        
                                        <Typography style={{fontSize:15, color:"#525252"}}>
                                            It’s quick and easy.
                                        </Typography>

                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <div style={{ flex: 1, backgroundColor: "#BDBDBD", height: "1px", marginTop: 10, marginBottom: 10}} />
                                        </div>
                                        
                                            <TextField  size='small' placeholder="First name" label="First name" style={{marginRight: 10}} onChange={(event) =>{
                                                    let d = data;
                                                    setData({...d, first_name: event.target.value});
                                                    }}/> 

                                            <TextField size='small' placeholder="Last name" label="Last name" onChange={(event) =>{
                                                    let d = data;
                                                    setData({...d, last_name: event.target.value});
                                                    }}/> 

                                            <TextField  size='small' placeholder="Mobile number or email" label="Email" style={{width:'100%', marginTop: 10}} onChange={(event) =>{
                                                    let d = data;
                                                    setData({...d, email: event.target.value});
                                                    }}/> 

                                            <TextField  size='small' placeholder="New Password" label="Password" type="password" style={{width:'100%', marginTop: 10, marginBottom: 10}} onChange={(event) =>{
                                                    let d = data;
                                                    setData({...d, password: event.target.value});
                                                    }}/> 
                                          
                                            <Typography style={{fontSize:15, color:"#525252"}}>Birthday</Typography>
                                          
                                            <TextField  size='small' placeholder="Year" label="Year" style={{width:'31.5%', marginRight: 10}} onChange={(event) => {
                                                let d = data
                                                setData({
                                                    ...d,
                                                    birthdate: formatDate(event.target.value, data.month, data.day), // Format the date and update the state
                                                    year: event.target.value,
                                                })
                                                }}
                                            />
                                          
                                          
                                            <TextField  size='small' placeholder="Month" label="Month" style={{width:'31.5%',marginRight:10}} onChange={(event) => {
                                                let d = data
                                                setData({
                                                    ...d,
                                                    birthdate: formatDate(data.year, event.target.value, data.day), // Format the date and update the state
                                                    month: event.target.value,
                                                })
                                                }}
                                            />
                                          
                                          
                                            <TextField  size='small' placeholder="Day" label="Day" style={{width:'31.5%',}} onChange={(event) => {
                                                let d = data
                                                setData({
                                                    ...d,
                                                    birthdate: formatDate(data.year, data.month, event.target.value), // Format the date and update the state
                                                    day: event.target.value,
                                                })
                                                }}
                                            />
                                            
                                          
                                            <Typography style={{fontSize:15, color:"#525252", marginTop: 10}}>Gender</Typography>
                                          
                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="row-radio-buttons-group" 
                                                onChange={(event) =>{
                                                    let d = data;
                                                    setData({...d, gender: event.target.value});
                                                    }}
                                            >
                                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                                                <FormControlLabel
                                                value="disabled"
                                                disabled
                                                control={<Radio />}
                                                label="other"
                                                />
                                            </RadioGroup>
                                           
                                            <Typography style={{fontSize:12, color:"#525252", marginBottom: 10}}>People who use our service may have uploaded your contact information to Facebook. Learn more.</Typography>
                                           
                                            <Typography style={{fontSize:12, color:"#525252", marginBottom: 10}}>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.</Typography>
                                           
                                            <Button variant="contained" color="success" style={{backgroundColor:"#00a400", marginTop:10, marginBottom: 10, 
                                                width: "45%", marginRight: "35%", marginLeft:"26.5%"}}  onClick={() =>{
                                                    axios.post('http://127.0.0.1:8000/api/v1/accounts/users/', data).then((response) =>{
                                                        console.log(response.data)
                                                        
                                                    }).catch(error => {
                                                        const errorMessage = error.response.data;
                                                        setErrorPassword(errorMessage.password)
                                                    })
                                                }} >Sign Up</Button>
                                                
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