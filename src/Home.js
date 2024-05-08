import React from 'react'
import Feed from './Feed'
const Home = ({post}) => {
  return (
    <div>
      {(post.length) ?
      <Feed post={post}/> :
      (<h1>No posts to display</h1>)
      }
    </div>
  )
}

export default Home
