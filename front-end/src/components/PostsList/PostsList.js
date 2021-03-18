import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    list:{
        border:'1px solid black',
        backgroundColor:"purple",
        marginTop:'5px'
    },
    picBlock: {
        height:'100px',
        width:'150px'
    }
})

const PostsList = props => {
    const classes = useStyles();
    const url = 'http://localhost:8000/uploads/' + (props.image);

    return (
        <>
            <Grid container xl={10} 
            className={classes.list}>
                <Grid item container direction="column">
                    <Grid item container direction="column">
                        <Typography variant="h4">
                            Author: {props.author}
                        </Typography>
                        <Typography variant="h5">
                            Date: {props.date}
                        </Typography>
                    </Grid>
                    <Grid>
                        <Grid item className={classes.picBlock} 
                        style={{
                            display: props.image==='[object Object]' ? 'none' : 'block',
                            backgroundImage:'url('+(url) + ')',
                            backgroundSize:'100% 100%',
                            backgroundRepeat:'no-repeat'
                        }}>
                        </Grid>
                        <Typography variant="h5">
                            Message: {props.message}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default PostsList;