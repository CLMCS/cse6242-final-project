import React from 'react'
import {AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class DataGrid extends React.Component {
  state = {
    gridRef: () => null,
    // rowData: this.props.queryResult,
    // columnDefs: Object.keys(this.props.queryResult[0]).map(elem=>{return {field: elem, sortable: true, filter: true}})
    defaultColDef: {
      editable: true,
      sortable: true,
      flex: 1,
      filter: true,
      resizable: true,
      width: 250, 
      minWidth: 140
    }
  }

  componentDidUpdate() {
    // console.log('grid', this.props.queryResult)
  }

  onGridReady = (params) => {
    this.gridApi = params.api
    this.gridColumnApi = params.columnApi
  }


  render() {
    return (
      <div id='data-table'>
        <div className="ag-theme-alpine" style={{height: 800, width: '95%', margin: 'auto'}}>
          <AgGridReact
              ref={this.state.gridRef}
              rowData={this.props.queryResult}
              columnDefs={Object.keys(this.props.queryResult[0]).map(elem=>{return {field: elem, sortable: true, filter: true}})}
              defaultColDef={this.state.defaultColDef}
              animateRows={true}
              rowSelection="multiple"
              rowMultiSelectWithClick={true}
              >
          </AgGridReact>
          <div style={{height: 200}}></div>
        </div>
      </div>

    )
  }
}


export default DataGrid;