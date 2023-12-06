import { Box, TextField, Button } from '@mui/material/';
import { useState } from 'react';

const Novinar = () => {

    const [zahtev, setZahtev] = useState({
        novinar: "",
        vreme: "",
        mesto: "",
        opis: ""
    })

    const { novinar, vreme, mesto, opis } = zahtev;

    const handleChange = (e) => {
        setZahtev((zahtev) => ({
            ...zahtev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('uspešno poslato');
    }

    return (
        <>
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
                    name="novinar"
                    label="novinar"
                    value={novinar}
                    onChange={handleChange}
                    required
                />
                <TextField
                    variant="filled"
                    name="vreme"
                    label="datum i vreme"
                    value={vreme}
                    onChange={handleChange}
                    required
                />
                <TextField
                    variant="filled"
                    name="mesto"
                    label="mesto"
                    value={mesto}
                    onChange={handleChange}
                    required
                />
                <TextField
                    variant="filled"
                    name="opis"
                    label="opis snimanja"
                    value={opis}
                    onChange={handleChange}
                    required
                    multiline
                    maxRows={4}
                />
                <br />
                <Button variant="contained" type="submit" >Pošalji</Button>
            </Box>
        </>
    );
}

export default Novinar;