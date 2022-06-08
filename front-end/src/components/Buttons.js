import React from 'react'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Typography from '@mui/material/Typography'
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles'
import { orange, red } from '@material-ui/core/colors'




class MyButtons extends React.Component {
  render() {
    return (
      <ButtonGroup variant="contained" color="primary">
        <Button startIcon={<SaveIcon />}>Save</Button>
        <Button startIcon={<DeleteIcon />}>Delete</Button>
      </ButtonGroup>
    )
  }
}

const useStyles = makeStyles({
  myButtons: {
    background: 'linear-gradient(45deg, #333, #999)',
    border: 0, 
    marginBottom: 15,
    borderRadius:0,
    color: 'white',
    padding: '5px 10px'
  }
})

const theme = createTheme({
  typography: {
    h2: {
      fontSize: 10
    }
  },
  palette: {
    primary: {
      main: orange[500]
    },
    secondary: {
      main: red[900]
    }
  }
})

function ButtonStyled() {
  const classes = useStyles()
  return (
    <div>
      <ThemeProvider theme={theme}>
        {/* <Typography variant="h2" component="div">
          Hello
        </Typography> */}
        <Button className={classes.myButtons}>Styled Button</Button>
        <MyButtons />      
      </ThemeProvider>      
    </div>

  )
}


export default ButtonStyled