import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { Link } from 'react-router-dom'


const useStyles = makeStyles({
    AppBar: {
      background: 'linear-gradient(3deg, #888, #333)',
      border: 0, 
      marginBottom: 15,
      borderRadius:0,
      color: 'white',
      padding: '5px 10px'
    },
    ButtonGroup: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
  })

  function Appbar() {
    const classes = useStyles()
    return (
        <div>
            <Paper elevation={24} style={{height: 58, width: '100%'}}>
                <AppBar className={classes.AppBar}>
                    <Toolbar variant="dense">

                        <Typography variant="h6" sx={{fontWeight: 900, fontSize: 38, color: '#8d0801',textShadow: '3px 3px #470024' }}>
                            NEOCITE
                        </Typography>
            
                            <Stack direction="row" spacing={2} ml={3}>

                            <ButtonGroup variant="text" color="white" aria-label="text primary button group">

                                <Link to='/' style={{textDecoration: 'none'}}>
                                    <Button variant="text" href="#text-buttons">
                                        <Typography variant="P" component="P" mx={2} sx={{color: 'white'}}>
                                            HOME
                                        </Typography>
                                    </Button>                                    
                                </Link>

                                <Link to='/worldmap' style={{textDecoration: 'none'}}>
                                    <Button href="" >
                                        <Typography variant="subtitle2" component="subtitled2" mx={2} sx={{color: 'white'}}>
                                            GRAPH
                                        </Typography >
                                    </Button>
                                </Link>

                                <Link to='/usetable' style={{textDecoration: 'none'}}>
                                    <Button href="" >
                                        <Typography variant="subtitle2" component="subtitled2" mx={2} sx={{color: 'white'}}>
                                            TABLE
                                        </Typography >
                                    </Button>
                                </Link>

                                <Link to='/useapi' style={{textDecoration: 'none'}}>
                                    <Button>
                                        <Typography variant="subtitle2" component="subtitled2" mx={2} sx={{color: 'white'}}>
                                            API
                                        </Typography>
                                    </Button>                                    
                                </Link>

                                <Link to='/about' style={{textDecoration: 'none'}}>
                                    <Button>
                                        <Typography variant="subtitle2" component="subtitled2" mx={2} sx={{color: 'white'}}>
                                            ABOUT
                                        </Typography>
                                    </Button>                                      
                                </Link>    
 
                                <Link to='/contactus' style={{textDecoration: 'none'}}>
                                    <Button>
                                        <Typography variant="subtitle2" component="subtitled2" mx={2} sx={{color: 'white'}}>
                                            FEEDBACK
                                        </Typography>
                                    </Button>                                       
                                </Link>
                            </ButtonGroup>
                        </Stack>                              
                    </Toolbar>
                </AppBar>            
            </Paper>            
        </div>


    )
}





export default Appbar