import { useState } from "react"
import axios from "axios";
import { Card, CardContent, Grid, TextField, FormControl, Button, Link } from "@mui/material";
import { Container } from "@mui/system";
import { CenterFocusStrong } from "@mui/icons-material";

function Register() {
    const [data, setData] = useState({
        username: '',
        email: '',
        password: '', 
    })
    const [errorPassword, setErrorPassword] = useState('')
  return (
    <div style={{backgroundColor: '#F0F2F5', }}>

        <Container maxwidth>
            <Grid container spacing={2} style={{padding: 20, backgroundColor: '#F0F2F5', height: '100v'}}>
                <Grid item xs={6}>
                    <h1>Grid 6</h1>
                </Grid>
                <Grid item xs={6} >
                   <Card sx={{ maxWidth: 360, }}>
                        <CardContent >
                            <FormControl fullWidth a>
                                <TextField variant="outlined" placeholder="Email" label="Email" />
                                <TextField variant="outlined" placeholder="Password" type="password" label="Password" style={{marginTop: 15, marginBottom: 15}} />
                                <Button variant="contained" size="large" style={{backgroundColor:"#1877f2" }}>Login</Button>
                             
                                <Link href="#" underline="none" style={{marginBottom: 15, marginTop: 15, justify:"center"}}>{'Forgot Password?'}</Link>
                                <Button variant="contained" color="success" style={{backgroundColor:"#42b72a"}}>Create Account</Button>
                            </FormControl>
                            
                        </CardContent>
                   </Card>
                </Grid>

            </Grid>
        </Container>

        {/*<h1>Register diri</h1>
        <p>{errorPassword}</p>
        <input placeholder="username" onChange={(event) =>{
            let d = data;
            setData({...d, username: event.target.value});
         }}/>

        <input placeholder="email" onChange={(event) =>{
            let d = data;
            setData({...d, email: event.target.value});
      }}/>

        <input placeholder="password" type="password" onChange={(event) =>{
            let d = data;
            setData({...d, password: event.target.value});
      }}/>

<button onClick={() =>{
                axios.post('http://127.0.0.1:8000/api/v1/accounts/users/', data).then((response) =>{
                    console.log(response.data)
                }).catch(error => {
                    const errorMessage = error.response.data;
                    setErrorPassword(errorMessage.password)
                })
            }} >Register</button>*/}

    </div>
  )
}
export default Register