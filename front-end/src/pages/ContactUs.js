import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import AppBar from '../components/AppBar.js'
import BottomBar from '../components/BottomBar.js'
import PersonCard from '../components/CardPersonInfo.js'

function Content() {
    return (
        <Box mt={10} mb={20} >
            <Container>
                <Grid container spacing={3}>
                    <PersonCard avatar={<span style={{ fontSize: 100 }}>&#129299;</span>} personName='Zhaoyu Sun' degree='M.S. in Bioinformatics' email='zysun@gatech.edu'/>
                    <PersonCard avatar={<span style={{ fontSize: 100 }}>&#129315;</span>} personName='Haoting Chen' degree='M.S. in Bioinformatics' email='hchen703@gatech.edu'/>
                    <PersonCard avatar={<span style={{ fontSize: 100 }}>&#129488;</span>} personName='Cheng Zhang' degree='M.S. in Bioinformatics' email='czhang743@gatech.edu'/>
                    <PersonCard avatar={<span style={{ fontSize: 100 }}>&#128579;</span>} personName='Haojun Song' degree='M.S. in Bioinformatics' email='hsong343@gatech.edu'/>
                    <PersonCard avatar={<span style={{ fontSize: 100 }}>&#128526;</span>} personName='Chen Lin' degree='Ph.D. in Mathematics' email='clin-8@hotmail.com'/>
                </Grid>
            </Container>
        </Box>
    )
}


class ContactUs extends React.Component {

  render() {
    return (
      <div>
        <AppBar />
        <Content />
        <BottomBar />       
      </div>
      
    )
  }
}




        
export default ContactUs