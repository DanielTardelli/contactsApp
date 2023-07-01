import { Typography } from "@mui/material"

const TitleAndAnswer = ({title, answer, sizes}) => {
    return (
        <>
            <Typography variant={sizes[0]} sx={{textAlign:'left', ml: {xs: '0px', sm:'0px', md: '15px'}, fontWeight: '700', color: '#858585', textTransform: 'uppercase'}}>
                {title}
            </Typography>
            <Typography variant={sizes[1]} sx={{textAlign: 'left', ml: {xs: '0px', sm:'0px', md: '15px'}}}>
                {answer}
            </Typography>
            <div style={{height:'5px', width:'100%'}}/>
        </>
    )
}

export default TitleAndAnswer