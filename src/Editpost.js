import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom';
const Editpost = ({post,handleEdit,edittitle,editbody,setedittitle,seteditbody}) => {
    const {id}=useParams();
    const [val,setVal]=useState('');
    const edit = post.find(pos => pos.id.toString() === id);
    seteditbody(edit.body)
    setedittitle(edit.title)

   

   

  return (
    <div>
        <form className='form' onSubmit={(e) => {handleEdit(edit.id,edittitle,e,editbody)}}>
            <label >Edit Title</label>
            <input  type="text" value={edittitle} onChange={(e) => setedittitle(e.target.value)}/>
            <label htmlFor='editbody'>Edit Body</label>
            <input  type="text" id="editbody" defaultValue={editbody} onChange={(e) => {seteditbody(e.target.value)}}></input>
            <button type="submit">Submit</button>
            <input  type="text" value={val} onChange={(e)=>setVal(e.target.value)}></input>

            <p>message={val}</p>

        </form>
        
      
    </div>
  )
}

export default Editpost
