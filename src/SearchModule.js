import React from 'react';

import { Container, Box, Input } from '@mui/material';

function SearchModule({search}) {
    return (    
       <>
        <Box sx={{height:'40px', width: {xs: '100%', sm: '400px'}, backgroundColor: '#D3D3D3', borderRadius: '15px',
                  textAlign: 'left', display:'flex', alignItems:'center'}}>
            <Input
                type="text"
                onChange={(event) => search(event.target.value)}
                placeholder="Search contacts..."
                sx={{ml: '10px'}}
                disableUnderline
            />
        </Box>
       </> 
    )
}

export default SearchModule