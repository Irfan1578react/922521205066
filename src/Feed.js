import React from 'react'
import Post from './Post'
const Feed = ({post}) => {
  return (
    <div>
      {post.map((pos) => {
        return(
            <Post post={pos}></Post>
        )
      })}
    </div>
  )
}

export default Feed
