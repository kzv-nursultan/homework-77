import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Forms from '../Forms/Forms';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../store/actions/action';
import PostsList from '../../components/PostsList/PostsList';

const useStyles = makeStyles({
 formBlock:{
     width:'100%',
     marginBottom:'20px'
 },
 postsBlock: {
     margin:'10px 0 40px',
     maxWidth:'100%',
     textAlign:'center'   
 }
});

const MainPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const posts = useSelector(state=>state.message.value);

    useEffect(()=>{
        dispatch(getData());
    },[dispatch]);

    const list = (
        posts.map(element => ( 
            <PostsList 
            key={element.id}
            author={element.author}
            date={element.date}
            message={element.message}
            image={element.image}
            />
        ))
    );

    return (
        <Grid container direction='column'> 
            <Grid item className={classes.postsBlock}>
                {list}
            </Grid> 
            <Grid item className={classes.formBlock}>
                <Forms/>
            </Grid>      
        </Grid>
    );
};

export default MainPage;