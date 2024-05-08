import React from 'react'
import {Link} from "react-router-dom"
const Post = ({post}) => {
  return (
    <div>
        <li key={post.id}>
           <Link to={`posts/${post.id}`}>
                <h1>{post.title}</h1>
                <p>{post.datetime}</p>

            </Link>
            <p>  {(post.body.length)<=25? post.body:
            (`${post.body.slice(0,25)}...`)}</p>


        </li>
      
    </div>
  )
}

export default Post
