import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import AppBar from '../components/AppBar.js'
import BottomBar from '../components/BottomBar.js'
import FetchData from '../components/FetchData.js'
import { useParams } from "react-router-dom";
import fullname from '../utils/abbr_countries.js'
import fieldName from '../utils/fieldName.js'


function Content() {
    // const classes = useStyles();
    let { p0, p1, p2, p3, p4 } = useParams();

    return (
        <Box mt={10} mb={20} >
            <Container>
              <Box ml={4}>
                <h1>{
                  p1==='by-country'?
                  `Top ${p4} Scholars in the Field of ${fieldName[p2]} in ${fullname[p3]}`:
                  `Top ${p4} scholars in the Field of ${fieldName[p2]} in Your Query Institute(id=${p3}).`
                }</h1>
              </Box>

              <Box mt={5}>
                <FetchData ajaxParams={[p0, p1, p2, p3, p4]} />
              </Box>
              
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