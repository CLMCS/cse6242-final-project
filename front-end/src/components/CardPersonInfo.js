import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@material-ui/core/Box'
import SaveIcon from '@material-ui/icons/Save'
import React from 'react'
import Container from '@material-ui/core/Container'


class PersonCard extends React.Component {
  
  render() {   
    return (
      <Grid item xs={12} xl={6}>
        <Paper elevation={14} style={{background: '#f2f2f2', height: 200, width: '100%'}}>


          <Box>
            <Container>
              <Grid container spacing={1}>
                <Grid item md={3}>
                  {/* <img src={this.props.img} className="img" /> */}
                  <Box mt={2.5}>
                    {this.props.avatar}
                  </Box>
                  
                </Grid>
                <Grid item md={9}>
                  <Box ml={2}>
                    <Typography variant="h5" component="h5" mt={0.5} ml={0} sx={{fontWeight: 800}}>
                      {this.props.personName}
                    </Typography>
                    <Typography variant="p" component="p" mt={3} ml={1.5}>
                      Geogia Institute of Technology
                    </Typography>
                    <Typography variant="p" component="p" mt={1.5} ml={1.5}>
                      {this.props.degree}
                    </Typography>
                    <Typography variant="p" component="p" mt={1.5} ml={1.5}>
                      {this.props.email}
                    </Typography>
                  </Box>    
                </Grid>
              </Grid>
            </Container>
          </Box>
        




        </Paper>
      </Grid>
      
    )
  }
}



export default PersonCard