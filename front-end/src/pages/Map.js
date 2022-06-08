import React from 'react'
import AppBar from '../components/AppBar.js'
import BottomBar from '../components/BottomBar.js'
import Worldmap from '../components/Worldmap.js'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'


class Content extends React.Component {
  state = {
      fieldName: 'unselected'
    }


  handleChange = (e) => {
    this.setState({
      'fieldName': e.target.value 
    })
  }

  render() {
    return (
      <Box mt={8} mb={10}>
        <Container>
          <label for="selectField"><span class='filter-name'>Academic Field: </span></label>
          <select id='queryField' name='selectField' onChange={this.handleChange} value={this.state.fieldName}>
            <option disabled selected value='unselected'>Select Field to Visualize</option>
              <option disabled value='AIAndImgProcessing'>Artificial Intelligence And Image Processing</option>                                                                                                             
              <option disabled value='nuclearParticle'>Atomic Molecylar Nuclear Particle And Plasma Physics</option>    
              <option disabled value='biochemAndCellBiology'>Biochemistry And Cell Biology</option>           
              <option          value='ecology'>Ecology</option>     
              <option disabled value='genetics'>Genetics</option>                                                                                                                                                           
              <option disabled value='geology'>Geology</option>                                                                                      
              <option disabled value='immunology'>Immunology</option>        
              <option          value='materialsEngineering'>Material Engineering</option> 
              <option disabled value='microbiology'>Microbiology</option>  
              <option disabled value='neurosciences'>Neurosciences</option>    
              <option disabled value='oncologyAndCarcinogenesis'>Oncology And Carcinogenesis</option>   
              <option disabled value='PRMedicine'>Paediatrics And Reproductive Medicine</option>                                                                                                                            
              <option disabled value='pharmacology'>Pharmacology And Pharmaceutical Sciences</option>          
              <option disabled value='physicalChemistry'>Physical Chemistry </option>                                                                                                                                                           
              <option disabled value='physiology'>Physiology</option>            
              <option disabled value='plantBiology'>Plant Biology</option>                                                                                                                                                  
              <option disabled value='publicHealth'>Public Health And Health Services</option>                                                                                                                                                                                                                                                                     
              <option          value='pureMath'>Pure Mathematics</option>   
          </select>   
          
          <Worldmap fieldName={this.state.fieldName}/>
        </Container>
      </Box>
    )    
  }

}



class Map extends React.Component {
  render() {
    return (
      <div>
        <AppBar />
        {/* <PortalWallPaper /> */}
          <Content />
        <BottomBar />        
      </div>
      
    )
    
  }
}


export default Map
