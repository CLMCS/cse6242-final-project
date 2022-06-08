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
                        Learn More
                    </Typography>
                    <Typography variant="h5" component="h5" mt={4} ml={0} sx={{fontWeight: 700}}>
                    Our Data
                    </Typography>
                    <Typography variant="p" component="p" mt={3} ml={0} sx={{fontSize: 18}}>
                    We use SN SciGraph (Springer) and Semantic Scholar Academic Graph (S2AG) datasets. Our raw dataset was 
                    retrieved from Springer, which aggregates data sources from Springer Nature and key partners in the academic 
                    field. The platform organizes information from the entire research field, including various datasets of 
                    articles, journals, people, institutions, etc. However, the citation and reference information of the article 
                    in Springer is insufficient. We can not get the relationship between paper and paper, and author and author 
                    from it. Therefore, we added the S2AG dataset. The most important thing is that it has the citation and reference 
                    relationship of the articles, and provides monthly snapshots of research papers published in all fields. The Springer 
                    dataset is a subset of S2AG. So we use Springer's DOI to find the citation and reference information of the article 
                    in S2AG. And use these two properties as a supplement to the Springer properties.
                    
                    </Typography>
                </Box>
                
                <Box sx={{ marginY: '80px'}}>
                    <Typography variant="h5" component="h5" mt={4} ml={0} sx={{fontWeight: 700}}>
                    Data Cleaning and database creation
                    </Typography>
                    <Typography variant="p" component="p" mt={3} ml={0} sx={{fontSize: 18}}>
                    We need to perform data cleaning on Springer and S2AG, and integrate their processed results. Because the data size is 
                    huge, we do the data analysis with PySpark on AWS. Springer: Screened out the articles published after 1960 with 
                    a clear author, journal, and field of research from Springer. All articles were grouped into 157 second-level 
                    disciplines (subfields) according to the subject two-level classification method used in the ANZ Standard Research 
                    Classification organization. S2AG: Screened from AI data, articles with clear citation and reference information 
                    published after 1960. Integrated: Taking the filtered Springer as the main database, 157 subfields (Springer) and 
                    S2AG screened article entries are placed on the AWS platform for matching. And we can get the citation relationship 
                    between paper and paper in each subfield in Springer, as well as the citation relationship between journal and journal. 
                    Finally, we can know the citation network (directed graph) between paper and paper in each subfield, and the citation 
                    network (directed graph) between journal and journal. These relationships will serve as input to a mathematical model 
                    of subsequent author ratings.
                    </Typography>
                    <Typography variant="p" component="p" mt={3} ml={0} sx={{fontSize: 18}}>
                    After data cleaning, we use SQLite to create the database. Due to the limited number of papers in some subfields, we 
                    finally selected 20 subfields to display in the visualization section. We merge the papers, authors, author-publication, 
                    and author scores of these 20 fields together as db1. We also use Global Research Identifier Database (GRID), to find 
                    the affiliation id, affiliation name, and country corresponding to the author in db1 as db2, to locate the author's 
                    current institution and the geographic location of the institution. In this way, it is convenient for the front end 
                    to retrieve information and visualize it.
                    </Typography>
                </Box>
            </Container>            
        </Box>

    )
}


class LearnMore extends React.Component {
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


export default LearnMore
