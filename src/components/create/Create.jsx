import { useState } from 'react'
import axios from "axios"
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classes from './create.module.css'
export default function App() {
  const { userInfo } = useSelector((state) => state.auth)
  const navigate = useNavigate();
  const token = localStorage.getItem("token")
  const [file, setFile] = useState()
  const [title, settitle] = useState("")
  const [category, setcategory] = useState("")
  const [desc, setDesc] = useState("")
  const categories = [
    'nature',
    'music',
    'travel',
    'design',
    'programming',
    'fun',
    'fashion'
  ]

  const handleCreateBlog = async event => {
    event.preventDefault()
  
    const formData = new FormData()
    formData.append("image", file)
    formData.append("title", title)
    formData.append("category", category)
    // formData.append("quantity", quantity)
    formData.append("desc",desc)
    // const options = {'Authorization':`Bearer ${userInfo.token}` }
    const options = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userInfo.token}`
    }
    const result = await axios.post("http://localhost:5000/api/blog/create",formData,{
    headers: {'Authorization': `Bearer ${userInfo.token}`}}
    // { headers: {"accesstoken": token}}
    )
    console.log(result.data)
    navigate('/');
  }

  return (
<div className={classes.container}>
<div className={classes.wrapper}>
  <h2 className={classes.title}>Create Blog</h2>
  <form onSubmit={handleCreateBlog} encType="multipart/form-data">
    <div className={classes.inputWrapper}>
      <label>Title: </label>
      <input
        type="text"
        placeholder='Title...'
        className={classes.input}
        onChange={(e) => settitle(e.target.value)}
    
      />
    </div>
    <div className={classes.inputWrapper}>
      <label>Description: </label>
      <input
        type="text"
        placeholder='Description...' 

        className={classes.input}
        onChange={(e) => setDesc(e.target.value)}
      />
    </div>
    <div className={classes.inputWrapperSelect}>
      <label>Category: </label>
      
      <select   value={category}   className={classes.input} onChange={(e) => setcategory(e.target.value)}>
        {categories.map((category) => (
          <option key={crypto.randomUUID()} value={category}>{category}</option>
        ))}
      </select>
        {/* <input type="text"
        value={category} 
        placeholder='category...' 
        className={classes.input}
        onChange={(e) => setcategory(e.target.value)}
      /> */}
    </div>
    <div className={classes.inputWrapperImg}>
      {/* <label htmlFor='image' className={classes.labelFileInput}>
        Image: <span>Upload here</span>
      </label> */}
      <input
        id="image"
        type="file"
        className={classes.input}
          // style={{ display: 'none' }}
          filename={file} 
          onChange={e => setFile(e.target.files[0])} 
          accept="image/*"
      />
    </div>
    <div className={classes.buttonWrapper}>
      <button className={classes.submitBtn} type="submit">
        Submit form
      </button>
    </div>
  </form>
</div>
</div>
  )
}