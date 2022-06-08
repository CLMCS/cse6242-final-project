import React from 'react'
import AppBar from '../components/AppBar.js'
import BottomBar from '../components/BottomBar.js'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Typography from '@mui/material/Typography'




function Content() {
    return (
        <Box mb={20}>
            <Container>
                <Box sx={{ marginY: '40px'}}>
                    <Typography variant="h3" component="h3" mt={10} ml={0} sx={{fontWeight: 800}}>
                        About NEOCITE
                    </Typography>
                    <Typography variant="h5" component="h5" mt={4} ml={0} sx={{fontWeight: 700}}>
                    Problem definition
                    </Typography>
                    <Typography variant="p" component="p" mt={3} ml={0} sx={{fontSize: 18}}>
                    The goal of the web interface system will provide a direct and interactive visualization to guide researchers to 
                    choose higher education organizations for studying abroad, scholar visiting, etc. Here, we present to construct 
                    a web application that will provide detailed author and cited information in each higher education institution and 
                    have a ranking system with our customized impact factor calculation in a different field. It will provide the top 
                    higher education institution around the globe or in a specific target area. An additional top highly impactful author 
                    will be demonstrated with their notable journal paper that is ranked using our impact model. Furthermore, aids 
                    researchers to discover the top impact authors' info in different regions and academic fields.
                    </Typography>
                </Box>


                <Box sx={{ marginY: '80px'}}>
                    <Typography variant="h5" component="h5" mt={4} ml={0} sx={{fontWeight: 700}}>
                        What are the limits of current practice and What's new in our approach?
                    </Typography>
                    <Typography variant="p" component="p" mt={3} ml={0} sx={{fontSize: 18}}>
                    The citation number people often refer to as a standard for evaluating a paper is biased. For the citation number, 
                    according to the model of random citing scientists, the number might be high since a majority of scientific citations
                     are copied from the list of references used in other papers causing the citation numbers of articles from the list 
                     to increase exponentially, or the field of the paper is popular in recent years, or the paper introduces some major 
                     theorems from a subject. The number might be low if it is about a not that “popular” field of a subject or the average 
                     rate of citing decreases with the aging of a paper. And the power-law distributions of citations of a paper published 
                     during the same year might also cause the various citation numbers.
                    </Typography>
                    <Typography variant="p" component="p" mt={3} ml={0} sx={{fontSize: 18}}>
                    The current citation network structures and their mathematical models only use one or two variables to find the new 
                    citation number which we claim does not fit the current tendency of changes in citation numbers. We built directed 
                    acyclic graphs with citation networks and co-author networks for authors. The nodes represent individuals and links 
                    represent the citation interaction among those individuals referring to the structure mentioned in, which will be 
                    counted towards the influence number of authors. Each node includes information about individuals' organizations, 
                    fields of study, and lists of citation numbers of publications. Our networks identify all authors related to a 
                    specific research topic and the subfield structured around it. Then use the citation networks to build a new model 
                    simulated by several mathematical models which consider all the factors that might cause an impact on citation 
                    numbers, assigns a new value for the “citation number'' with citation interaction of a paper, called influence 
                    number of a paper, and gives authors' with influence numbers of individuals' publications and relation influence 
                    number with different weights to show the key authors and their representative publications in a certain field, 
                    and organizations and countries involved in the research.
                    </Typography>
                </Box>
            </Container>            
        </Box>

    )
}


class About extends React.Component {
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


export default About
