import React,{useState,useEffect} from 'react'
import './App.css'
import axios from 'axios'
import {Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/layouts/Header'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import PostBlog from './components/Posts'
import AddPost from './components/AddPost'
import EditPost from './components/EditPost'



window.jQuery = window.$ = require('jquery/dist/jquery.min.js');
require('bootstrap/dist/js/bootstrap.min.js');


function App() {
  const [posts,setPosts]=useState([])
  useEffect(()=>{
    axios.get('/api/crud')
    .then(res=>setPosts(res.data))
    .catch(err=>console.log(err));
  })
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Route exact path="/" render={()=><PostBlog posts={posts}/>}/>
      <Route path="/add-post" component={AddPost}/>
      <Route path="/edit-post/:id" render={props => <EditPost {...props} posts={posts}/>}/>
      <Footer/>
    </div>
  );
}

export default App;
