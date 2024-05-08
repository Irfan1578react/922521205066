import React from 'react'

const Newpost = ({newtitle,newbody,setnewtitle,setnewbody,handleSubmit}) => {
  return (
    <div>
        <form className='form' onSubmit={(e) => handleSubmit(newtitle,newbody,e)}>
            <label htmlFor='title'>Title</label>
            <input id="title" placeholder='NewTitle' type="text" value={newtitle} onChange={(e) => setnewtitle(e.target.value)}></input>
            <label htmlFor='body'>Body</label>
            <textarea placeholder='NewBody' value={newbody} id ="body"onChange={(e) => setnewbody(e.target.value)}></textarea>
            <button type="submit" >Submit</button>

        </form>
      
    </div>
  )
}

export default Newpost
