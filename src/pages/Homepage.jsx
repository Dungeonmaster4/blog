import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase-config';

function Homepage({isAuth}) {
    const [postsList, setPostsList] = useState([]);
    const PostsCollection = collection(db, 'posts-data')

    useEffect(() => {
        const getPostList = async () => {
            const data = await getDocs(PostsCollection)
            setPostsList(data.docs.map(doc => {
                return {...doc.data(), id: doc.id}
            }));
        }
        getPostList()
    }, []);

    const deletePost = async (id) => {
        const postToDelete = doc(db, 'posts-data', id)
        await deleteDoc(postToDelete)
    }

    return ( 
        <div className='homePage'>
            {postsList.map((post)=>{
                return  (
                <div key={post.id} className='post'> 
                    <div className='postHeader'>
                        <div className='title'>
                            <h2>{post.title}</h2>
                        </div>
                        <div className='deletePost'>
                            {isAuth && post.author.id === auth.currentUser.uid && <button onClick={() => deletePost(post.id)}>Delete post</button>}
                        </div>
                    </div>
                    <div className='postTextContainer'> 
                        <p>{post.postText}</p>
                    </div>
                        <h5>@{post.author.name}</h5>
                </div>)
            })}
        </div>
     );
}

export default Homepage;