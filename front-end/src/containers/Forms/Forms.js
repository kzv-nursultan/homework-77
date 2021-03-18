import React, { useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from '../../axiosPosts';
import AlertDialog from '../../components/UI/Dialog/Dialog';

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
        image:{name:'Image'} 
    });

    const [error, setError] = useState(false);

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

        try {
            await axios.post('/posts', formData);
        } catch {
            setError(true);
        };
        setMessage({
            author:'',
            message:'',
            image:{name:'Image'}
        })
    };

    const closeAlertDialog = () => {
        setError(false);
    };

    return (
        <Grid container 
        direction='row' 
        spacing={2} 
        className={classes.formPage} 
        justify='center' 
        alignItems='center'>
            <AlertDialog error={error} handleClose={closeAlertDialog}/>
            <Grid item>
                <TextField 
                value={message.author}
                name='author'
                label='Author' 
                variant='outlined'
                onChange={inputChangeHandler}/>
            </Grid>
            <Grid item>
                <TextField 
                value={message.message}
                name='message'
                label='Message' 
                variant='outlined'
                required
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
                value={message.image.name}
                InputLabelProps={{ shrink: true }}
                variant='outlined'
                label='Image Name'
                onClick={inputClick}/>
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