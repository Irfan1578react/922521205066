import React from 'react'
import {useParams,Link} from 'react-router-dom'
const Postpage = ({post,handleDelete}) => {
    const {id}=useParams();
    const res=post.find((pos) =>{
            return(
                (pos.id).toString()===id
            )
    })
  return (
    <div>
      {res && res.title?(
        <> 
      <h1>{res.title}</h1>
      <p>{res.datetime}</p>
      <p>{res.body}</p>
      <Link to={`/edit/${res.id}`}><button type="button" >EditPost</button></Link>
      <button type="button" onClick={() => {handleDelete(res.id)}}>Delete</button>
      </>
      ):(
        <>
        <h1>
          Oops!There is a problem
        </h1>
        </>
      )
    }
    </div>
      
  )
}

export default Postpage
