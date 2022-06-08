import * as React from 'react';
import Typography from '@mui/material/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import KeyboardArrowRightSharpIcon from '@mui/icons-material/KeyboardArrowRightSharp';
import { makeStyles } from '@material-ui/core/styles'
import imgdemo from '../img/demo.png'
import imgnetwork from '../img/network.png'



const useStyles = makeStyles({
    myButtons: {
    //   background: 'linear-gradient(45deg, #333, #999)',
      background: '#ff9f1c',
      border: 0, 
      marginBottom: 15,
      borderRadius:0,
      color: 'white',
      padding: '15px 50px 15px 10px',
      fontSize: 23
    }
  })

const PortalBody = ()  => {
    const classes = useStyles()
    return (  
        <Box sx={{ mt: 8}}>
            <Container>
                <Grid container spacing={10}>
                        <Grid item md={6} lg={6} xl={6}>
                            <Box sx={{marginTop: '20px', padding: '5px 2px'}} >
                                <img src={imgdemo} className='imgdemo'></img>
                            </Box>
                        </Grid>

                        <Grid item md={6} lg={6} xl={6}>
                            <Box sx={{margin: '5px 5px', padding: '5px 2px'}}>
                                <Typography variant="h3" component="h3" sx={{fontWeight: 700}}>
                                    What is NEOCITE?
                                </Typography>   
                                <Typography variant="p" component="p" mt={2} sx={{fontWeight: 300, fontSize: 23}}>
                                  NEOCITE is a website that provides rankings of top authors in higher education institutions around the world with our customized impact factor calculation methodologies in different fields. Top authors in each field are demonstrated with their notable journal paper that is ranked using our mathematical models.

                                </Typography>
                                <Box mt={9}>
                                    <Button 
                                        variant='contained' 
                                        sizeLarge 
                                        startIcon={<KeyboardArrowRightSharpIcon style={{ fontSize: 40 }}/>} 
                                        className={classes.myButtons}
                                        href='http://127.0.0.1:3000/worldmap'
                                    >Start Here</Button>
                                </Box>
                            </Box>

                        </Grid>
                </Grid>
            </Container>   
            <Box mt={5} mb={27}>
                <Container>
                    <Grid container spacing={10}>
                        <Grid item md={7} lg={7} xl={7}>
                                <Box sx={{margin: '5px 5px', padding: '5px 2px'}}>
                                    <Typography variant="h3" component="h3" sx={{fontWeight: 700}}>
                                        Why NEOCITE?
                                    </Typography>   
                                    <Typography variant="p" component="p" mt={2} sx={{fontWeight: 300, fontSize: 23}}>
                                    Our methodology framework compiled using mathematical models based on various factors to calculate innovative scores for authors differs from the traditional citations per faculty or h-index methodology. For scholars, the influence of faculties and their research output are the key factors of choosing graduate schools. We measure institutional research quality using our powerful citation networks to construct a mathematical model that finds authors’ influence indices. Differ from the traditional SNIP and SJR scores for journals, our journal influence mathematical model uses AHP (Analytical Hierarchy Process) to decide the new influence numbers for journals.
                                    </Typography>
                                </Box>

                            </Grid>
                            <Grid item md={5} lg={5} xl={5}>
                                <Box sx={{marginTop: '20px', padding: '5px 2px'}} >
                                    <img src={imgnetwork} className='imgPortal'></img>
                                </Box>
                            </Grid>


                    </Grid>
                </Container>                  
            </Box>


        </Box>
       
     
  
  
  
  
  
      
    )
  }
  



export default PortalBody