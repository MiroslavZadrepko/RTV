import { Box, TextField, Button, imageListClasses } from '@mui/material/';
import { useState } from 'react';
import Snimatelji from "./Snimatelji"; 


function LogIn() {

    const [submit, setSubmit] = useState(false);

    const [loginUser, setLoginUser] = useState({
        user_name: "",
        user_lastName: "",
        user_password: "",
    })

    const { user_name, user_lastName, user_password } = loginUser;

    const handleChange = (e) => {
        setLoginUser((loginUser) => ({
            ...loginUser,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('uspešno logovanje');
        setSubmit(!submit);

        

    }

    return (
        <Box
            component='form'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                m: 5,
            }}
            onSubmit={handleSubmit}
        >
            <TextField
                variant="filled"
                name="user_name"
                label="unesite ime"
                value={user_name}
                onChange={handleChange}
                required
            />
            <TextField
                variant="filled"
                name="user_lastName"
                label="unesite prezime"
                value={user_lastName}
                onChange={handleChange}
                required
            />
            <TextField
                variant="filled"
                type="password"
                name="user_password"
                label="unsesite šifru"
                value={user_password}
                onChange={handleChange}
                required
            />
            <br />
            <Button variant="contained" type="submit" >Ulogujte se</Button>
            {submit ? <Snimatelji/> : null}
        </Box>
    )
}

export default LogIn