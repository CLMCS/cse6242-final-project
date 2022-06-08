import React from 'react'
import DataGrid from '../components/DataGrid.js'

class Data extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        dataSource: 'unselected',
        queryResult: [{
            data: 'unknown'
        }]
      }    
      this.ajaxQuery = this.ajaxQuery.bind(this)
      
    }
    componentDidMount() {
        this.ajaxQuery()
    }
  
    ajaxQuery = () => {
      const url = 'http://127.0.0.1:5000/api/author-rank/by-org/pureMath/grid.16750.35/30'
      const xmlhttp = new XMLHttpRequest()
      const passData = (data) => {this.setState({ 'queryResult': data})}
      const log = () => {console.log(typeof this.state.queryResult, this.state.queryResult)}

    
      xmlhttp.onreadystatechange=function()
      {
        if (xmlhttp.readyState===4 && xmlhttp.status===200) {
          console.log(xmlhttp.responseText)
          if (xmlhttp.responseText === '[]') {
              this.setState({
                  'queryResult': [{ '0 entries': '' }] 
              })
            return 
          }
  
          new Promise((resolve, reject) => {
            const newArr = xmlhttp.responseText.match(/{.*?}/mg).map((tuple) => {
              return JSON.parse(tuple)
            })
            resolve(newArr)
          }).then(newArr => {
            passData(newArr)
          }).then(()=>{
              log()
          })
        }
      }
  
      xmlhttp.open("GET",url,true)
      xmlhttp.send()
    }
    
    render() {
      return (
          <DataGrid queryResult={this.state.queryResult} />
      )
    }
  }
  
  
  
  export default Data;
  