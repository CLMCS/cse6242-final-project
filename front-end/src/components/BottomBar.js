import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'





const BottomBar = ()  => {
  return (
      <Paper square style={{background: 'linear-gradient(180deg, #555, #333)'}}>
        <Container maxWidth="lg">
					<Grid container spacing={2}>
							<Grid item xs={4} md={3} lg={3} xl={3}>
								<Box paddingY={4}>
								<Typography variant="h6" component="h6" color='lightgrey'>
									Georgia Institute of Technology
								</Typography>
								<Typography variant="subtitle2" component="p" mt={2} color='lightgrey'>
									North Avenue, Atlanta, GA 30332
								</Typography>
								<Typography variant="subtitle2" component="p" color='lightgrey'>
									404.894.2000
								</Typography>
								</Box>
							</Grid>

							<Grid item xs={0} md={2} lg={2} xl={2}>
							</Grid>

							<Grid item xs={4} md={4} lg={5} xl={5}>
								<Box paddingY={4}>
								<Typography variant="subtitle2" component="p" mt={3} color='lightgrey'>
									Legal & Privacy Information
								</Typography>
								<Typography variant="subtitle2" component="p" mt={1} color='lightgrey'>
									Contact Information
								</Typography>
								<Typography variant="subtitle2" component="p" mt={1} color='lightgrey'>
									Accessibility
								</Typography>
								<Typography variant="subtitle2" component="p" mt={1} color='lightgrey'>
									Accreditation
								</Typography>
								</Box>
							</Grid>
					</Grid>
        </Container>        
      </Paper>      
  )
}



export default BottomBar