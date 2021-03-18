import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    list:{
        border:'1px solid black',
        backgroundColor:"pink",
        marginTop:'5px',
        padding:'10px',
        width:'100%'
    },
    postHeader:{
        textAlign:'left'
    },
    picBlock: {
        height:'140px',
        width:'250px',
        backgroundSize:'100% 100%',
        backgroundRepeat:'no-repeat',
        margin:'3px auto'
    },
    textBlock: {
        margin:'10px 0',
        borderBottom:'1px solid black'
    },
    textBody: {
        border: '1px solid blue',
        padding:'5px 10px'
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
                    <Grid item container direction="column" className={classes.postHeader}>
                        <Typography variant="h4" className={classes.textBlock}>
                            Author: {props.author}
                        </Typography>
                        <Typography variant="h5">
                            Date: {props.date}
                        </Typography>
                    </Grid>
                    <Grid item className={classes.textBody}>
                        <Grid item className={classes.picBlock} 
                        style={{
                            display: props.image==='[object Object]' ? 'none' : 'block',
                            backgroundImage:'url('+(url) + ')'
                        }}>
                        </Grid>
                        <Typography variant="h4" className={classes.textBlock}>
                            Message: {props.message}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default PostsList;