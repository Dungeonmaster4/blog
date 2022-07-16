import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase-config';
import { useNavigate } from "react-router-dom";
import PostSearch from '../components/Search';


function Homepage({isAuth}) {
    let navigate = useNavigate()
    const [postsList, setPostsList] = useState([]);
    const PostsCollection = collection(db, 'posts-data')
    const [filteredPosts, setfilteredPosts] = useState([]);
    const [searchField, setSearchField] = useState('');

    useEffect(() => {
        setfilteredPosts(postsList.filter((post)=>{
            return (
                post.title.toLowerCase().includes(searchField.toLowerCase()) || 
                post.postText.toLowerCase().includes(searchField.toLowerCase()) ||
                post.author.name.toLowerCase().includes(searchField.toLowerCase()) 
                // post.date.date.toLowerCase().includes(searchField.toLowerCase())
                )
        }))
        console.log(filteredPosts);
    }, [searchField]);

    useEffect(() => {
        const getPostList = async () => {
            const data = await getDocs(PostsCollection)
            setPostsList(data.docs.map(doc => {
                return {...doc.data(), id: doc.id}
            }));
            setfilteredPosts(data.docs.map(doc => {
                return {...doc.data(), id: doc.id}
            }));
        }
        getPostList()
    }, []);

    // .sort((a,b)=> a.date.forSort - b.date.forSort)

    const deletePost = async (id) => {
        const postToDelete = doc(db, 'posts-data', id)
        await deleteDoc(postToDelete)
        navigate('/')

    }

    return ( 
        <div className='homePage'>
            <PostSearch setSearchField={setSearchField} />
            {filteredPosts.map((post)=>{
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
                    <div className='postBottomContainer'>
                        <h5>@{post.author.name}</h5>
                        {post.date && <h6>{post.date.postDate}</h6>}
                    </div>
                </div>)
            })}
        </div>
     );
}

export default Homepage;