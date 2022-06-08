import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LinearIndeterminate from './LinearProgress.js'

class DropdownAcademic extends React.Component {
  handleChange = e => {
    this.props.resetParentState('academicField', e.target.value)
    
  }

  render() {
    return (
      <Box className="filter-academic-field" sx={{ maxWidth: 400 }}>
        <FormControl fullWidth>
          <InputLabel id="academic-field-select">Age</InputLabel>
          <Select
            labelId="academic-field-select"
            id="academic-field-select"
            value={this.props.academicField==='unselected' ? '':this.props.academicField}
            label="Age"
            onChange={this.handleChange}
          >
            
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
    )
  }
}








class FilterAcademicField extends React.Component {

  state = {
      academicField: 'unselected'
  }    
  
  ajaxQuery = () => {
    const url = this.processUrl()
    const xmlhttp = new XMLHttpRequest()
    xmlhttp.onreadystatechange=function() {
      if (xmlhttp.readyState===4 && xmlhttp.status===200) {
        console.log(xmlhttp.responseText)
      }
    }
    xmlhttp.open("GET",url,true);
    xmlhttp.send();
  }

  processUrl = () => {
    let url = 'http://127.0.0.1:5000/api/'
    // add academic field
    // const academicField = this.state.academicField
    // url += `?academicField=${academicField}`
    console.log(url)
    return url
  }

  resetParentState = (key, val) => {
    this.setState({ [key]: val })
  }

  render() {
    return (
      <div>
          <div id='progress'></div>
          {/* dropdown list: data source */}
          <DropdownAcademic academicField={this.state.academicField} resetParentState={this.resetParentState}></DropdownAcademic>

          {/* AJAX query database api */}
          <button onClick={this.ajaxQuery}>Query</button>         
      </div>      
    )
  }
}


export default FilterAcademicField

