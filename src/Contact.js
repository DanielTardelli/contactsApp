import React from 'react';

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { Container, Link, Typography, Box, Grid, Divider, Button } from '@mui/material';

import MapFromDetails from './MapFromDetails'
import TitleAndAnswer from './TitleAndAnswer';

function Contact({contact}) {
    const returnEmailAddress = () => {
        return `mailTo:${contact.email}`
    }

    const returnWebsite = () => {
        return `https://${contact.website}`
    }

    const returnAddress = () => {
        return `${contact.address.city}, ${contact.address.street}, ${contact.address.suite}, ${contact.address.zipcode}`
    }

    const returnFormattedLngLat = () => {
        return `LONGITUDE: ${contact.address.geo.lng} - LATITUDE: ${contact.address.geo.lat}`
    }

    return (
        <Accordion>
            <AccordionSummary>
                <div style={{width: '100%', display:'flex', flexDirection:'row'}}>
                    <Typography sx={{typography: {sm: "h6", md: "h6"}, textAlign:'left', width: {xs: '100%', sm: '300px'}}}>
                        {contact.name}
                    </Typography>
                    <div style={{height: '100%', width: '30px'}}/>
                    <Container sx={{height: '100%', display: {xs: 'none', sm: 'none', md: 'flex'}, flexDirection: 'column'}}>
                        <Typography variant="subtitle1" sx={{textAlign: 'left'}}>
                            <Link href={returnEmailAddress()}>{contact.email}</Link>
                        </Typography>
                        <Typography variant="subtitle2" sx={{textAlign: 'left'}}>
                            <Link href={returnWebsite()}>{contact.website}</Link>
                        </Typography>
                    </Container>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <Container sx={{display: {xs:'none', sm:'none', md:'block'}}}>
                    <Box sx={{display:'flex', flexDirection:'column', width: '100%'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={6}>
                                <MapFromDetails lng={contact.address.geo.lng} lat={contact.address.geo.lat} id={contact.id} mode={"LARGE"}/>
                                <Typography variant="subtitle2">{returnFormattedLngLat()}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Box sx={{borderRadius: '15px', mb: '10px', height:'100%', display:'flex',
                                          justifyContent: 'center', flexDirection: 'column'}}>
                                    <TitleAndAnswer title={"Contact Name / Username:"} answer={contact.name + " / " + contact.username} sizes={["h5", "subtitle1"]}/>
                                    <Divider variant="middle"/>
                                    <TitleAndAnswer title={"Email:"} answer={<Link href={returnEmailAddress()}>{contact.email}</Link>} sizes={["h5", "subtitle1"]}/>
                                    <Divider variant="middle"/>
                                    <TitleAndAnswer title={"Phone Number:"} answer={contact.phone} sizes={["h5", "subtitle1"]}/>
                                    <Divider variant="middle"/>
                                    <TitleAndAnswer title={"Address:"} answer={returnAddress()} sizes={["h5", "subtitle1"]}/>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{width: '100%', height:' 30px', background: '#ababab', borderTopLeftRadius: '15px', borderTopRightRadius: '15px'}}>
                                    <Typography variant="h6" sx={{fontWeight: '700', color: '#ffffff'}}>
                                        COMPANY DETAILS
                                    </Typography>
                                </Box>
                                <Box sx={{background: '#e3e3e3', 
                                            borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px', mb: '10px', height:'100%', display:'flex',
                                            justifyContent: 'center', flexDirection: 'column'}}>
                                    <TitleAndAnswer title={"Name:"} answer={contact.company.name} sizes={["h5", "subtitle1"]}/>
                                    <Divider variant="middle"/>
                                    <TitleAndAnswer title={"Catchphrase:"} answer={contact.company.catchPhrase} sizes={["h5", "subtitle1"]}/>
                                    <Divider variant="middle"/>
                                    <TitleAndAnswer title={"Business Solution:"} answer={contact.company.bs} sizes={["h5", "subtitle1"]}/>
                                    <Divider variant="middle"/>
                                    <TitleAndAnswer title={"Website:"} answer={<Link href={returnWebsite()}>{contact.website}</Link>} sizes={["h5", "subtitle1"]}/>
                                </Box>
                            </Grid>
                        </Grid>
                        <Container sx={{width:'100%', padding:'10px', mt: '40px'}}>
                            <Button variant="contained">
                                <Typography variant="subtitle1" color="white" sx={{fontWeight:' 700'}}>
                                    EDIT USER INFORMATION
                                </Typography>
                            </Button>
                        </Container>
                    </Box>
                </Container>
                <Container sx={{display: {xs: 'block', md:'none'}}}>
                    <Box sx={{display:'flex', flexDirection:'column', width: '100%', alignItems:'center'}}>
                        <Grid container spacing={3} sx={{ml:0}}>
                            <Grid item xs={12} sx={{paddingLeft: 0}}>
                                <Typography variant="h6">Personal</Typography>
                                <Divider/>
                                <TitleAndAnswer title={"Contact Name / Username:"} answer={contact.name + " / " + contact.username} sizes={["subtitle1", "subtitle2"]}/>
                                <Divider/>
                                <TitleAndAnswer title={"Email:"} answer={<Link href={returnEmailAddress()}>{contact.email}</Link>} sizes={["subtitle1", "subtitle2"]}/>
                                <Divider/>
                                <TitleAndAnswer title={"Phone Number:"} answer={contact.phone} sizes={["subtitle1", "subtitle2"]}/>
                                <Divider/>
                                <TitleAndAnswer title={"Address:"} answer={returnAddress()} sizes={["subtitle1", "subtitle2"]}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6">Company</Typography>
                                <Divider/>
                                <TitleAndAnswer title={"Name:"} answer={contact.company.name} sizes={["subtitle1", "subtitle2"]}/>
                                <Divider/>
                                <TitleAndAnswer title={"Catchphrase:"} answer={contact.company.catchPhrase} sizes={["subtitle1", "subtitle2"]}/>
                                <Divider/>
                                <TitleAndAnswer title={"Business Solution:"} answer={contact.company.bs} sizes={["subtitle1", "subtitle2"]}/>
                                <Divider/>
                                <TitleAndAnswer title={"Website:"} answer={<Link href={returnWebsite()}>{contact.website}</Link>} sizes={["subtitle1", "subtitle2"]}/>
                            </Grid>
                        </Grid>
                        <Container sx={{width:'100%', padding:'10px'}}>
                            <Button variant="contained">
                                <Typography variant="subtitle1" color="white" sx={{fontWeight:' 700'}}>
                                    EDIT USER INFORMATION
                                </Typography>
                            </Button>
                        </Container>
                    </Box>
                </Container>
            </AccordionDetails>
        </Accordion>
    )
}

export default Contact