import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import AppBar from '../components/AppBar.js'
import BottomBar from '../components/BottomBar.js'
import FetchData from '../components/FetchData.js'
import { useParams } from "react-router-dom";
import fieldName from '../utils/fieldName.js'





function Content() {
    let { p0, p1 } = useParams()

    let title
    if (p0.split('-')[0] === 'country') {
        title = `Score of All Countries in the Field of ${fieldName[p1]}`
    } else if (p0.split('-')[0] === 'org') {
        title = `Score of Top 10 Academic Institutions in Each Country in the Field of ${fieldName[p1]}`
    } else if (p0.split('-')[0] === 'author') {
        title = `All this Person's Work(person_id=${p1})`
    }

    return (
        <Box mt={10} mb={20} >
            <Container>
              <Box ml={4}>
                <h1>{ title }</h1>
              </Box>
              
              <Box mt={5}>
                <FetchData ajaxParams={[p0, p1]} />
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