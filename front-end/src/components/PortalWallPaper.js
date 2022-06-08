import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import black from '../black.png'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import { Link } from 'react-router-dom'

const PortalWallPaper = ()  => {
  return (

      <Paper elevation={24} square style={{backgroundColor: 'black'}}>
        <Container maxWidth="xl">
          <Paper square style={{height: 600, width: '100%', backgroundImage: `url(${black})`}}>
              {/* <Box 
              sx={{
                  display: "flex",
                  alignItems: "center",
                  color:'white',
                  width: 800,
                  marginLeft: 1000,
                  paddingTop: 180
              }}>
                <Typography variant="h1" component="h1" sx={{fontWeight: 700}}>
                    Academic Rankings Based on Citation Network
                </Typography>
              </Box> */}
              <Container maxWidth="xl">
              <Box sx={{paddingTop: 200, float: 'right'}}>
                <Typography variant="h1" component="h1" sx={{fontWeight: 700, color: 'white'}}>
                      Academic
                </Typography>    
                <Typography variant="h1" component="h1" sx={{fontWeight: 700, color: 'white'}}>
                      Rankings Based on 
                </Typography>  
                <Typography variant="h1" component="h1" sx={{fontWeight: 700, color: 'white'}}>
                      Citation Network
                </Typography>              
              </Box>


              </Container>

              <Container maxWidth="lg">
                <Box sx={{paddingTop: 550}}>
                  <Stack direction="row" spacing={10} sx={{justify: 'center'}}>

                      <Link to='/learnmore' style={{textDecoration: 'none'}}>
                        <Button href="#text-buttons">
                          <EmojiObjectsOutlinedIcon fontSize="medium" sx={{color: 'white'}}/>
                          <Typography variant="subtitle1" component="h2" ml={1} mt={0.5} sx={{color: 'white'}}>
                            LEARN MORE
                          </Typography>
                        </Button>                        
                      </Link>

                    
                      <Link to='/contactus' style={{textDecoration: 'none'}}>
                        <Button href="#text-buttons">
                        <PersonSharpIcon fontSize="medium" sx={{color: 'white'}}/>
                        <Typography variant="subtitle1" component="h2" ml={1}  mt={0.5} sx={{color: 'white'}}>
                          CONTACT US
                        </Typography>
                        </Button>
                      </Link>


                  </Stack>
                </Box>                
              </Container>
          </Paper>
        </Container>        
      </Paper>      
  )
}



export default PortalWallPaper