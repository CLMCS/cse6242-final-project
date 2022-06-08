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
                        Inspect in Table
                    </Typography>

                    <Box sx={{ marginY: '40px'}}>
                        <Typography variant="p" component="p" mt={3} ml={0} sx={{fontSize: 18}}>
                        Our website provides a table format of the data, you can view the data of five subjects here. But due to time constraints, 
                        we have not been able to make a complete GUI interaction, so this may require you to manually modify your request URL. The 
                        details on URL modification are described below. If the address refers to an <a href='http://127.0.0.1:5000/field_name.txt'>academic field</a> or <a href='http://127.0.0.1:5000/abbr_country.txt'>country</a>, you would need to 
                        retrieve the corresponding form of the key word in the list provided in the link.
                        </Typography>   
                    </Box>

                    <Typography variant="h5" component="h5" mt={4} ml={0} sx={{fontWeight: 700}}>
                        Score of All Countries in a Specific Academic Field
                    </Typography>
                    <hr />
                    <Typography variant="p" component="p" mt={3} ml={0} sx={{fontSize: 18}}>
                    With specifying one academic field of interest, you can access the score of all countries worldwide in this field. The node showing 
                    in <b>BOLD</b> is what you need to modify. The academic field should be retrieved from our <a href='http://127.0.0.1:5000/field_name.txt'>Academic field abbreviation table</a>.
                    </Typography>   

                    <Typography variant="p" component="p" mt={2} ml={2}sx={{fontWeight: 600, fontSize: 18}}>
                        To view all countries' score in the field of "Pure Mathematics"
                    </Typography>
                    <Typography variant="p" component="p" mt={0} ml={2} sx={{fontSize: 18}}>
                        <a href='http://localhost:3000/datatable/country-score/pureMath'>http://127.0.0.1:3000/datatable/country-score/<b>pureMath</b></a>
                    </Typography>
                    <Typography variant="p" component="p" mt={2} ml={2}sx={{fontWeight: 600, fontSize: 18}}>
                        To view all countries' score in the field of "Ecology"
                    </Typography>
                    <Typography variant="p" component="p" mt={0} ml={2} sx={{fontSize: 18}}>
                        <a href='http://localhost:3000/datatable/country-score/ecology'>http://127.0.0.1:3000/datatable/country-score/<b>ecology</b></a>
                    </Typography>
                    <Typography variant="p" component="p" mt={2} ml={2}sx={{fontWeight: 600, fontSize: 18}}>
                        To view all countries' score in the field of "Materials Engineering"
                    </Typography>
                    <Typography variant="p" component="p" mt={0} ml={2} sx={{fontSize: 18}}>
                        <a href='http://localhost:3000/datatable/country-score/materialsEngineering'>http://127.0.0.1:3000/datatable/country-score/<b>materialsEngineering</b></a>
                    </Typography>
                </Box>



                <Box sx={{ marginY: '60px'}}>
                    <Typography variant="h5" component="h5" mt={4} ml={0} sx={{fontWeight: 700}}>
                        Score of Top 10 Academic Institutions in Each Country in a Specific Academic Field
                    </Typography>
                    <hr />
                    <Typography variant="p" component="p" mt={3} ml={0} sx={{fontSize: 18}}>
                    With specifying the academic field, you can access the score of top 10 institutions in each country worldwide, in the corresponding field. 
                    The node showing in <b>BOLD</b> is what you need to modify. The academic field should be retrieved from our <a href='http://127.0.0.1:5000/field_name.txt'>Academic field abbreviation table</a>.
                    </Typography>   

                    <Typography variant="p" component="p" mt={2} ml={2}sx={{fontWeight: 600, fontSize: 18}}>
                        To view top 10 academic institutions' score in each country in the field of "Pure Mathematics"
                    </Typography>
                    <Typography variant="p" component="p" mt={0} ml={2} sx={{fontSize: 18}}>
                        <a href='http://localhost:3000/datatable/org-score/pureMath'>http://127.0.0.1:3000/datatable/org-score/<b>pureMath</b></a>
                    </Typography>
                    <Typography variant="p" component="p" mt={2} ml={2}sx={{fontWeight: 600, fontSize: 18}}>
                        To view top 10 academic institutions' score in each country in the field of "Ecology"
                    </Typography>
                    <Typography variant="p" component="p" mt={0} ml={2} sx={{fontSize: 18}}>
                        <a href='http://localhost:3000/datatable/org-score/ecology'>http://127.0.0.1:3000/datatable/org-score/<b>ecology</b></a>
                    </Typography>
                    <Typography variant="p" component="p" mt={2} ml={2}sx={{fontWeight: 600, fontSize: 18}}>
                        To view top 10 academic institutions' score in each country in the field of "Materials Engineering"
                    </Typography>
                    <Typography variant="p" component="p" mt={0} ml={2} sx={{fontSize: 18}}>
                        <a href='http://localhost:3000/datatable/org-score/materialsEngineering'>http://127.0.0.1:3000/datatable/org-score/<b>materialsEngineering</b></a>
                    </Typography>
                </Box>





                <Box sx={{ marginY: '60px'}}>
                    <Typography variant="h5" component="h5" mt={4} ml={0} sx={{fontWeight: 700}}>
                        Top N Authors in a Specific Country in a Specific Academic Field
                    </Typography>
                    <hr />
                    <Typography variant="p" component="p" mt={3} ml={0} sx={{fontSize: 18}}>
                    With specifying the academic field, country abbreviation and top N number, you can access these top N authors, with the information 
                    of their person id, person name, affiliation name and score. The node showing in <b>BOLD</b> is what you need to modify. The academic 
                    field and country abbreviation should be retrieved from our <a href='http://127.0.0.1:5000/field_name.txt'>Academic field abbreviation table</a> and <a href='http://127.0.0.1:5000/abbr_country.txt'>Country abbreviation table</a>, respectively.
                    </Typography>   
                    <Typography variant="p" component="p" mt={2} ml={2}sx={{fontWeight: 600, fontSize: 18}}>
                        To view top 3 authors in United States in "Materials Engineering"
                    </Typography>
                    <Typography variant="p" component="p" mt={0} ml={2} sx={{fontSize: 18}}>
                        <a href='http://localhost:3000/datatable/author-rank/by-country/materialsEngineering/USA/3'>http://127.0.0.1:3000/datatable/author-rank/by-country/<b>materialsEngineering</b>/<b>USA</b>/<b>3</b></a>
                    </Typography>
                    <Typography variant="p" component="p" mt={2} ml={2}sx={{fontWeight: 600, fontSize: 18}}>
                        To view top 80 authors in United Kindom in "Ecology"
                    </Typography>
                    <Typography variant="p" component="p" mt={0} ml={2} sx={{fontSize: 18}}>
                        <a href='http://localhost:3000/datatable/author-rank/by-country/ecology/GBR/80'>http://127.0.0.1:3000/datatable/author-rank/by-country/<b>ecology</b>/<b>GBR</b>/<b>80</b></a>
                    </Typography>
                    <Typography variant="p" component="p" mt={2} ml={2}sx={{fontWeight: 600, fontSize: 18}}>
                        To view top 3 authors in France in "Pure Mathematics"
                    </Typography>
                    <Typography variant="p" component="p" mt={0} ml={2} sx={{fontSize: 18}}>
                        <a href='http://localhost:3000/datatable/author-rank/by-country/pureMath/FRA/30'>http://127.0.0.1:3000/datatable/author-rank/by-country/<b>pureMath</b>/<b>FRA</b>/<b>30</b></a>
                    </Typography>                    
                </Box>



                <Box sx={{ marginY: '60px'}}>
                    <Typography variant="h5" component="h5" mt={4} ml={0} sx={{fontWeight: 700}}>
                        Top N Authors in a Specific Academic Institution in a Specific Academic Field
                    </Typography>
                    <hr />
                    <Typography variant="p" component="p" mt={3} ml={0} sx={{fontSize: 18}}>
                    With Specifying the academic field, institution id and top N number, you can access these top N authors, with the information of 
                    their person id, person name, affiliation name and score. The node showing in <b>BOLD</b> is what you need to modify. The academic field 
                    should be retrieved from our <a href='http://127.0.0.1:5000/field_name.txt'>Academic field abbreviation table</a>. As for the institution id, you can have it from other tables attributes.
                    </Typography>   
                    <Typography variant="p" component="p" mt={2} ml={2}sx={{fontWeight: 600, fontSize: 18}}>
                        To view top 20 authors in Institute of Physics(id="grid.458438.6") in "Materials Engineering"
                    </Typography>
                    <Typography variant="p" component="p" mt={0} ml={2} sx={{fontSize: 18}}>
                        <a href='http://localhost:3000/datatable/author-rank/by-org/materialsEngineering/grid.458438.6/20'>http://127.0.0.1:3000/datatable/author-rank/by-org/<b>materialsEngineering</b>/<b>grid.458438.6</b>/<b>20</b></a>
                    </Typography>
                    <Typography variant="p" component="p" mt={2} ml={2}sx={{fontWeight: 600, fontSize: 18}}>
                        To view top 15 authors in Oak Ridge National Laboratory(id="grid.135519.a") in "Ecology"
                    </Typography>
                    <Typography variant="p" component="p" mt={0} ml={2} sx={{fontSize: 18}}>
                        <a href='http://localhost:3000/datatable/author-rank/by-org/ecology/grid.135519.a/15'>http://127.0.0.1:3000/datatable/author-rank/by-org/<b>ecology</b>/<b>grid.135519.a</b>/<b>15</b></a>
                    </Typography>
                    <Typography variant="p" component="p" mt={2} ml={2}sx={{fontWeight: 600, fontSize: 18}}>
                        To view top 3 authors in Princeton University(id="grid.16750.35") in "Pure Mathematics"
                    </Typography>
                    <Typography variant="p" component="p" mt={0} ml={2} sx={{fontSize: 18}}>
                        <a href='http://localhost:3000/datatable/author-rank/by-org/pureMath/grid.16750.35/3'>http://127.0.0.1:3000/datatable/author-rank/by-org/<b>pureMath</b>/<b>grid.16750.35</b>/<b>3</b></a>
                    </Typography>                    
                </Box>



                <Box sx={{ marginY: '60px'}}>
                    <Typography variant="h5" component="h5" mt={4} ml={0} sx={{fontWeight: 700}}>
                        All this Author's Work
                    </Typography>
                    <hr />
                    <Typography variant="p" component="p" mt={3} ml={0} sx={{fontSize: 18}}>
                    With specifying the author's id which shows up in these two top N authors tables, you can access all the paper works in our 
                    database of this person. The node showing in <b>BOLD</b> is what you need to modify. The table returned only contains one column, standing this author's DOI paper links.

                    </Typography>   
                    <Typography variant="p" component="p" mt={2} ml={2}sx={{fontWeight: 600, fontSize: 18}}>
                        To view all this author's(id=sg:person.012155553275.80) work
                    </Typography>
                    <Typography variant="p" component="p" mt={0} ml={2} sx={{fontSize: 18}}>
                        <a href='http://localhost:3000/datatable/author-works/sg:person.012155553275.80'>http://localhost:3000/datatable/author-works/<b>sg:person.012155553275.80</b></a>
                    </Typography>
                    <Typography variant="p" component="p" mt={2} ml={2}sx={{fontWeight: 600, fontSize: 18}}>
                        To view all this author's(id=sg:person.01253222536.03) work
                    </Typography>
                    <Typography variant="p" component="p" mt={0} ml={2} sx={{fontSize: 18}}>
                        <a href='http://localhost:3000/datatable/author-works/sg:person.01253222536.03'>http://localhost:3000/datatable/author-works/<b>sg:person.01253222536.03</b></a>
                    </Typography>
                    <Typography variant="p" component="p" mt={2} ml={2}sx={{fontWeight: 600, fontSize: 18}}>
                    To view all this author's(id=sg:person.012217037247.14) work
                    </Typography>
                    <Typography variant="p" component="p" mt={0} ml={2} sx={{fontSize: 18}}>
                        <a href='http://localhost:3000/datatable/author-works/sg:person.012217037247.14'>http://localhost:3000/datatable/author-works/<b>sg:person.012217037247.14</b></a>
                    </Typography>     

                </Box>

            </Container>            
        </Box>

    )
}


class UseTable extends React.Component {
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


export default UseTable
