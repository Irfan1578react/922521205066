import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import {Routes,Route,Link,useNavigate} from "react-router-dom"
import api from "./api/Posts"
import Home from './Home';
import About from './About';
import Missing from './Missing';
import Nav from './Nav'
import Newpost from './Newpost';
import Postpage from './Postpage';
import Editpost from './Editpost'
import {format} from 'date-fns'
import Footer from "./Footer"


function App() {
  const [post,setPost]=useState([])
  const navigate=useNavigate();
  const [search,setSearch]=useState("");
  const [searchResults,setSearchResults]=useState([]);
  const [newtitle,setnewtitle]=useState("");
  const [newbody,setnewbody]=useState("");
  const [edittitle,setedittitle]=useState("")
  const [editbody,seteditbody]=useState("");
  const handleSubmit=async (newtitle,newbody,e) =>{
    e.preventDefault();
    const id=post.length?post[post.length-1].id+1:1
    const date=format(new Date(),"MMMM dd,yyyy pp");
    setPost([...post,{id,title:newtitle,datetime:date,body:newbody}])
    await api.post(`/posts`,{id,title:newtitle,datetime:date,body:newbody});

    setnewtitle("")
    setnewbody("")
    navigate("/")
  }

  const handleDelete=async (id) => {
  
    const resp=post.filter((pos) =>{
      return(
        pos.id.toString()!==id
      )
    })
    setPost(resp);
    await api.delete(`/posts/${parseInt(id,10)}`)
    navigate("/")
  }

  const handleEdit= async (id,edittitle,e,editbody) => {
    console.log(edittitle);
    console.log(edittitle)
    e.preventDefault()
    const date=format(new Date(),"MMMM dd,yyyy pp")
    const newpo=post.map((pos) =>{
      return(
      pos.id.toString()===id ?{id,title:edittitle,datetime:date,body:editbody}:pos
      )
    })
    const res=await api.put(`/posts/${id}`,{id,title:edittitle,datetime:date,body:editbody})
    setPost(newpo)
    seteditbody("")
    setedittitle("");
    navigate("/")
  }
  useEffect(() => {
    const fetchdata= async()=>{
    try{
      const response=await api.get("/posts")
      setPost(response.data);
    }
    catch(err){
      console.log(err.message);
    }
  }
  fetchdata()
  },[post])
  useEffect(() =>{
    const filterResults=post.filter((pos) =>{
      return(
        (pos.title.toLowerCase().includes(search.toLowerCase()) )||
        (pos.body.toLowerCase().includes(search.toLowerCase()))

      )
    })
    setSearchResults(filterResults.reverse());

  },[post,search])
  return (
    <main>
      <Header title={"Irfan Social Media App"}></Header>
      <Nav search={search} setSearch={setSearch}></Nav>
      <Routes>
        <Route path="/" element={<Home post={searchResults}/>}/>
        <Route path="about" element={<About />}/>
        <Route path="*" element={<Missing/>}/>
        <Route path="posts">
          <Route index element={<Newpost newtitle={newtitle} setnewtitle={setnewtitle} newbody={newbody} setnewbody={setnewbody} handleSubmit={handleSubmit}/>}/>
          <Route path=":id" element={<Postpage post={post} handleDelete={handleDelete}></Postpage>}/>

        </Route>
        
        <Route path="/edit/:id" element={<Editpost post={post} handleEdit={handleEdit} setedittitle={setedittitle} seteditbody={seteditbody} editbody={editbody} edittitle={edittitle}/>}/>

        
      </Routes>
      <Footer></Footer>
      
    </main>
  )
}

export default App;
