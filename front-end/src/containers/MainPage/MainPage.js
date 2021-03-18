import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Forms from '../Forms/Forms';
import axiosPosts from '../../axiosPosts';

const useStyles = makeStyles({
 fromBlock:{
     position:'fixed',
     zIndex: '500'
 }
});

const MainPage = () => {
    const classes = useStyles();
    const [posts, setPosts] = useState([]);

    const getRequest = async () => {
        const response = await axiosPosts.get('/posts');
        console.log(response.data);
    };

    return (
        <Grid container xl>
            <Grid item className={classes.formBlock}>
                <Forms/>
            </Grid>        
        </Grid>
    );
};

export default MainPage;