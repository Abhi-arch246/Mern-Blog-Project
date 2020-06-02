import React,{useState} from 'react'
import styled from 'styled-components'
import loading from '../loading.gif'
import {Link} from 'react-router-dom'
import axios from 'axios'


const Posts=({ posts }) =>{
    const [post,setPost]=useState([]);

    //Delete Post
    const delPost = id=>{
        axios.delete(`/api/crud/${id}`).then(res=>alert(res.data)).catch(err=>console.log(err));
        setPost(post.filter(elem =>elem._id !== id));
    };


    return (
        <MainContainer>
            {!posts.length ? <img src={loading} alt='loading..'/>:
                posts.map((data, key) => (
                <div className='container' key={key}>
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                    <span className='badge badge-secondary p-2'>{data.authorname}</span>
                    <div className='row my-4'>
                        <div className='col-sm-2'>
                            <Link to={`/edit-post/${data._id}`} className='btn btn-outline-success'>Edit Post</Link>
                        </div>
                        <div className='col-sm-2'>
                            <button onClick={()=> delPost(data._id)} className='btn btn-outline-danger'>Delete Post</button>
                        </div>
                    </div>
                    <hr style={{border:'1px solid cyan'}}/>
                </div>
            ))};
        </MainContainer>
    )
}

const MainContainer = styled.div`
    margin:4rem 0;

    img{
        width:10rem;
        display:block;
        margin:0 auto;
    }

`;


export default Posts
