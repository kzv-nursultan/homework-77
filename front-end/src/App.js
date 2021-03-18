import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './App.css';
import MainPage from './containers/MainPage/MainPage';

const useStyles = makeStyles({
  main:{
    width:'100%'
  },
  gridItem:{
    backgroundColor:'grey'
  }
});

function App() {

  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.main}>
      <Grid item>
        <MainPage/>
      </Grid>
    </Grid>
  );
}

export default App;
