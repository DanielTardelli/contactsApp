import React from 'react';

import { Container, Box, Typography, Divider, Button } from '@mui/material';
import SearchModule from './SearchModule'
import Contact from './Contact'

function ContactsModule({contacts}) {
    const [innerContacts, setInnerContacts] = React.useState(contacts)
    console.log(contacts);
    function search(searchBody) {
        setInnerContacts(contacts.filter(contact => contact.name.toLowerCase().includes(searchBody.toLowerCase())))
    }

    return (
        <>
            <Box sx={{height: '70px', width: '100%', background: 'linear-gradient(111deg, rgba(201,190,251,1) 0%, rgba(131,227,215,1) 100%)', marginBottom: '10px'}} />
            <Container sx={{width: {xs: '100%', sm: '95%', md: '90%'}}}>
                <Typography sx={{typography: {xs: 'h6', sm: 'h5', md: 'h4'}}}>
                    Contacts
                </Typography>
                <Divider sx={{mb:'10px'}}/>
                <Box sx={{width:'100%', display:'flex', flexDirection: {xs:'column', sm: 'row'}}}>
                    <SearchModule search={search} />
                    <Box sx={{flexGrow:1, paddingTop: {xs: '5px', sm:'0px'}}}/>
                    <Button variant="contained">Add +</Button>
                </Box>
                <div style={{height: '20px', width: '100%'}}/>
                {innerContacts.map(contact => {
                    return (
                        <Box>
                            <Contact contact={contact} />
                            <div style={{height: '20px', width: '100%'}}/>
                        </Box>
                    )
                })}
            </Container>
        </>
    )
}

export default ContactsModule