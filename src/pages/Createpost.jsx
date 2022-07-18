import { TextField, Typography } from '@mui/material';
import { addDoc, collection } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase-config';

function Createpost({isAuth}) {
    const [title, setTitle] = useState('');
    const [postText, setPostText] = useState('');
    let navigate = useNavigate()
    const handleChange =(e) => {
        if (e.target.name==="title") setTitle(e.target.value)
        if (e.target.name==="postText") setPostText(e.target.value)
    }

    let today = new Date()
    let date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();

    const PostsCollection = collection(db, 'posts-data') //2nd is the name of the collectin we created on firebase website
    const createPost = async () => { 
        await addDoc(PostsCollection, {
            title: title, 
            postText: postText, 
            author: {name: auth.currentUser.displayName, id: auth.currentUser.uid },
            date: {postDate: date, forSort: Date.now()}
        })
        navigate('/')
    }

    // useEffect(() => {
    //     if(!isAuth) navigate('/login')
    // }, []);

    return ( 
    <div className="createPostPage">
        <div className="cpContainer">
            <Typography variant='h5'>Create New Post</Typography>
            <div className="inputGp">
                
                 <TextField 
                    id="outlined-basic" 
                    label="Title:" 
                    variant="outlined"
                    placeholder="Name your post..."
                    onChange={handleChange} 
                    color='secondary'
                />
            </div>
            <div className="inputGp">
                <TextField
                    name='postText'
                    onChange={handleChange}
                    id="outlined-textarea"
                    label="Your post:"
                    placeholder="Start typing..."
                    multiline
                    variant="outlined"
                    color='secondary'
                    rows={4}
                />
            </div>
            <button onClick={createPost}>Post</button>
        </div>
        
    </div>
     );
}

export default Createpost;