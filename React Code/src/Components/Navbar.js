import * as React from 'react';
import {AppBar, Toolbar, Container, Button, Box} from '@mui/material';
import '../App.css';
import Logo from '../MainLogo.png';


const pages = ['Home', 'Buy Jhingha', 'Blog', 'About Us'];

export default function Navbar(){
    return(
        <AppBar 
        position="static"
        className="Appbarcss"
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '25px',
            background: 'transparent',
            boxShadow:'none',
          
            }}
        
        

        >
            <Container maxWidth="xl">
            <Toolbar disableGutters >
                <img src={Logo} style={{height: '6vh', objectFit: 'cover'}}/>
                    
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0% 0% 0% 14%' }} >
                    
                    {pages.map((page) => (
                    <Button
                        key={page}
                       
                        sx={{ my: 2, color: '#0F1523', fontFamily: "ubuntu-regular", fontSize: '1.8vh', fontWeight: 500,marginLeft: '15px', cursor: 'pointer' }}
                    >
                        {page}
                    </Button>
                    ))}
                    
                </Box>
                <Button sx={{color:'#0F1523',background:'#e9e9e8',border:'1px solid transparent', borderRadius:'11px', width:'7vw',padding: '8px 20px', cursor: 'pointer', marginLeft:'13vw'}}>Contact</Button>
            </Toolbar>
            </Container>

        </AppBar>

        
    );
};
