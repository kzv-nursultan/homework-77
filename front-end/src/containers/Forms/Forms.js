import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AlertDialog from '../../components/UI/Dialog/Dialog';
import { errorHandler, getData, postData } from '../../store/actions/action'

const useStyles = makeStyles({
    formPage:{
        backgroundColor:'white',
        padding: '10px'
    },
    hiddenInput:{
        display: 'none'
    },
    authorInput: {
        marginBottom:'10px'
    },
    btn:{
        margin:'0 2px',
        width:'20%'
    }
});

const Forms = () => {
    const classes = useStyles();
    const inputRef = useRef();
    const dispatch = useDispatch();

    const [message,setMessage] = useState({
        author:'',
        message:'',
        image:{name:'Image'} 
    });

    const error = useSelector(state=>state.message.error);

    const inputChangeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;

        setMessage(prevState=>({
            ...prevState,
            [name]:value 
        }));
    };

    const fileChangeHandler = e => {
        if(e.target.files[0].name){
            const name = e.target.name;
            const file = e.target.files[0];
    
            setMessage(prevState=>({
                ...prevState,
                [name]:file
            }));
        } else {
            setMessage(prevState=>({
                ...prevState,
                image:{name:'Image'}
            }));
        };
    }; 

    const inputClick = () => {
        inputRef.current.click();
    };

    const sendMessage = async () => {
        const formData = new FormData();

        Object.keys(message).forEach(key=>{
            formData.append(key, message[key]);
        });
        await dispatch(postData(formData));
        await dispatch(getData());

        setMessage({
            author:'',
            message:'',
            image:{name:'Image'}
        })
    };

    const closeAlertDialog = () => {
       dispatch(errorHandler());
    };

    return (
        <Grid container
        className={classes.formPage} 
        direction='row' 
        spacing={2}  
        justify='center' 
        alignItems='center'>
            <AlertDialog error={error} handleClose={closeAlertDialog}/>
           
            <Grid item container direction='column'>
                <TextField 
                className={classes.authorInput}
                value={message.author}
                name='author'
                label='Author' 
                variant='outlined'
                onChange={inputChangeHandler}/>

                <input 
                type='file'
                className={classes.hiddenInput}
                name='image'
                ref={inputRef}
                onChange={fileChangeHandler}/>

                <TextField 
                disabled 
                value={message.image.name}
                InputLabelProps={{ shrink: true }}
                variant='filled'
                label='Image Name'
                onClick={inputClick}/>

            </Grid>

            <Grid item container direction='column'>
                <TextField 
                value={message.message}
                multiline
                rows={4}
                name='message'
                label='Message' 
                variant='outlined'
                required
                onChange={inputChangeHandler}/>
            </Grid>

            <Button variant='contained' 
            color='primary' 
            className={classes.btn}
            onClick={sendMessage}>
                <strong>Send</strong>
            </Button>
        </Grid>

    );
};

export default Forms;