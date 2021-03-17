import React from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles';
import Forms from '../Forms/Forms';

const useStyles = makeStyles({
 fromBlock:{
     width:'100%',
     position:'fixed',
     zIndex: '500'
 }
});

const MainPage = () => {
    const classes = useStyles();

    return (
        <Grid container xl>
            <Grid item className={classes.formBlock}>
                <Forms/>
            </Grid>        
        </Grid>
    );
};

export default MainPage;