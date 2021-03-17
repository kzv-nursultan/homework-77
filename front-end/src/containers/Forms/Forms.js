import { Button, Grid, makeStyles, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { useRef, useState } from 'react';

const useStyles = makeStyles({
    formPage:{
        backgroundColor:'white',
        padding: '10px'
    },
    hiddenInput:{
        display: 'none'
    },
    btn:{
        margin:'0 2px'
    }
});

const Forms = () => {
    const classes = useStyles();
    const inputRef = useRef();

    const [message,setMessage] = useState({
        author:'',
        message:'',
        image:'' 
    });

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
            const file = e.target.files[0].name;
    
            setMessage(prevState=>({
                ...prevState,
                [name]:file
            }));
        } else {
            setMessage(prevState=>({
                ...prevState,
                image:''
            }));
        };
    }; 

    const inputClick = () => {
        inputRef.current.click();
    };

    const sendMessage = () => {
        const formData = new FormData();

        Object.keys(message).forEach(key=>{
            formData.append(key, message[key]);
        });
       console.log(formData);
    };

    return (
        <Grid container 
        direction='row' 
        spacing={2} 
        className={classes.formPage} 
        justify='center' 
        alignItems='center'>
            <Grid item>
                <TextField 
                name='author'
                label='Author' 
                variant='outlined'
                onChange={inputChangeHandler}/>
            </Grid>
            <Grid item>
                <TextField 
                name='message'
                label='Message' 
                variant='outlined'
                onChange={inputChangeHandler}/>
            </Grid>
            <Grid item className={classes.browse}>

                <input 
                type='file'
                className={classes.hiddenInput}
                name='image'
                ref={inputRef}
                onChange={fileChangeHandler}/>

                <TextField 
                disabled 
                value={message.image}
                variant='outlined'
                label='Image'/>
            </Grid>
            <Button variant='outlined' 
            color='secondary' 
            className={classes.btn}
            onClick={inputClick}>
                    Browse
                </Button>
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