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
            <h1>Create New Post</h1>
            <div className="inputGp">
                <label>Title:</label>
                <input 
                    name='title'
                    type='text' 
                    placeholder="Title..."
                    onChange={handleChange}
                />
            </div>
            <div className="inputGp">
                <label>Post:</label>
                <textarea 
                    placeholder="Post..."
                    name='postText'
                    onChange={handleChange}
                >

                </textarea>
            </div>
            <button onClick={createPost}>Post</button>
        </div>

    </div>
     );
}

export default Createpost;