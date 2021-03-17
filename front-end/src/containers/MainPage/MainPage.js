import { Grid, makeStyles } from '@material-ui/core';
import React, { useRef, useState } from 'react';
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