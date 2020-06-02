import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function EditPost(props) {
    const [title, setTitle] = useState("");
    const [authorname, setAuthorName] = useState("");
    const [description, setDescription] = useState("");
    const [message,setMessage]=useState("");

    const ChangeOnClick = e => {
        e.preventDefault();

        const cards = {
            title,
            authorname,
            description
        };
        setTitle("")
        setAuthorName("")
        setDescription("")

        axios.put(`/update/${props.match.params.id}`, cards)
        .then(res => setMessage(res.data)).catch(err => console.log(err));
    };

    useEffect(() => {
        axios.get(`/${props.match.params.id}`).then(res => [
            setTitle(res.data.title),
            setAuthorName(res.data.authorname),
            setDescription(res.data.description)
        ])
        .catch(err=>console.log(err));
    },[]);

    return (
        <div className="container">
            <h2 className="text-center mt-4">Update the Post</h2>
            <h5 className="text-danger p-3 text-center">{message}</h5>
            <div className='row my-4'>
                <form className='col-lg-7 mx-auto' encType="multipart/form-data" onSubmit={ChangeOnClick}>
                    <div className="form-group">
                        <label htmlFor="authorname">Author Name</label>
                        <input
                            type="text"
                            value={authorname}
                            className="form-control"
                            onChange={e => setAuthorName(e.target.value)}
                            placeholder="Enter your name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            value={title}
                            className="form-control"
                            onChange={e => setTitle(e.target.value)}
                            placeholder="Enter your title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            type="text"
                            value={description}
                            className="form-control"
                            onChange={e => setDescription(e.target.value)}
                            placeholder="Enter your description here..."
                            rows="8"></textarea>
                    </div>

                    <button type="submit" className="btn btn-outline-primary">Update Post</button>
                    <Link to="/" className='btn btn-outline-success ml-4'>Back to Home</Link>
                </form>
            </div>
        </div>
    )
}


export default EditPost
