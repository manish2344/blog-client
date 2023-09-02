// import { useState,useEffect } from 'react'
// import axios from "axios"

// import { useParams, useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux';
// import classes from './create.module.css'
// export default function App() {
//   const { userInfo } = useSelector((state) => state.auth)
//   const navigate = useNavigate();
//   const { _id } = useParams()

//   const token = localStorage.getItem("token")
//   // const [file, setFile] = useState()
//   const [title, settitle] = useState("")
//   const [category, setcategory] = useState("")
//   const [desc, setDesc] = useState("")
//   const categories = [
//     'nature',
//     'music',
//     'travel',
//     'design',
//     'programming',
//     'fun',
//     'fashion'
//   ]



//   const handleCreateBlog = async event => {
//     event.preventDefault()
  
//     const formData = new FormData()
//     // formData.append("image", file)
//     formData.append("title", title)
//     formData.append("category", category)
//     formData.append("desc",desc)
//     const result = await axios.put(`http://localhost:5000/api/blog/updateBlog/${_id}`,formData,{
//     headers: {'Authorization': `Bearer ${userInfo.token}`}}
//     )
//     console.log(result.data)
//     navigate('/');
//   }
//   useEffect(() => {
//     loaduser();
// }, []);
// const loaduser = async()=>{
//     const result = await axios.get(`http://localhost:5000/api/blog/find/${_id}`, {
//     headers: {"accesstoken": token}})
//     setDesc(result.data.desc);
//     settitle(result.data.title);
//     // setFile(result.data.avatar);
//     setcategory(result.data.category);
//     console.log("data========>",result.data);
//     // console.log("data========> image" ,result.data.avatar);
   
// }
//   return (
// <div className={classes.container}>
// <div className={classes.wrapper}>
//   <h2 className={classes.title}>edit Blog</h2>
//   <form onSubmit={handleCreateBlog} encType="multipart/form-data">
//     <div className={classes.inputWrapper}>
//       <label>Title: </label>
//       <input
//         type="text"
//         placeholder='Title...'
//         value={title}
//         className={classes.input}
//         onChange={(e) => settitle(e.target.value)}
    
//       />
//     </div>
//     <div className={classes.inputWrapper}>
//       <label>Description: </label>
//       <input
//         type="text"
//         value={desc}
//         placeholder='Description...' 

//         className={classes.input}
//         onChange={(e) => setDesc(e.target.value)}
//       />
//     </div>
//     <div className={classes.inputWrapperSelect}>
//       <label>Category: </label>
      
//       <select   value={category}   className={classes.input} onChange={(e) => setcategory(e.target.value)}>
//         {categories.map((category) => (
//           <option key={crypto.randomUUID()} value={category}>{category}</option>
//         ))}
//       </select>
//     </div>
//     {/* <div className={classes.inputWrapperImg}>
//       <input
//         id="image"
//         type="file"
//         // value={file}
//         className={classes.input}
//           // style={{ display: 'none' }}
//           filename={file} 
//           onChange={e => setFile(e.target.files[0])} 
//           accept="image/*"
//       />
//     </div> */}
//     <div className={classes.buttonWrapper}>
//       <button className={classes.submitBtn} type="submit">
//         Submit form
//       </button>
//     </div>
//   </form>
// </div>
// </div>
//   )
// }


import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from "axios"
import { useParams, useNavigate } from 'react-router-dom'
// import Footer from '../../components/footer/Footer'
// import Navbar from '../../components/navbar/Navbar'
// import { request } from '../../utils/fetchApi'
import classes from './updateBlog.module.css'

const UpdateBlog = () => {
  const [blogDetails, setBlogDetails] = useState("")
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [category, setCategory] = useState("")
  const { token } = useSelector((state) => state.auth)
  // const navigate = useNavigate()
  // const { id } = useParams()
  const navigate = useNavigate();
  const { _id } = useParams()
  const { userInfo } = useSelector((state) => state.auth)
  const categories = [
    'nature',
    'music',
    'travel',
    'design',
    'programming',
    'fun',
    'fashion'
  ]

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const options = {'Authorization': `Bearer ${token}`}
        // const data = await request(`/blog/find/${id}`, 'GET', options)
            const result = await axios.get(`https://blog-website-serverside.onrender.com/api/blog/find/${_id}`, {
    headers: {"accesstoken": token}})
        // setBlogDetails(data)
        setTitle(result.data.title)
        setDesc(result.data.desc)
        setCategory(result.data.category)

      } catch (error) {
        console.error(error)
      }
    }
    fetchBlogDetails()
  }, [])


  const handleUpdateBlog = async (e) => {
    e.preventDefault()

    try {
      const options = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
      // await request(`/blog/updateBlog/${id}`, "PUT", options, {title, desc, category})
      // navigate(`/blogDetails/${_id}`)
          await axios.put(`https://blog-website-serverside.onrender.com/api/blog/updateBlog/${_id}`,{title, desc, category},{
    headers: {'Authorization': `Bearer ${userInfo.token}`}}
    )
     navigate(`/`)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      {/* <Navbar /> */}
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <h2>Update Blog</h2>
          <form onSubmit={handleUpdateBlog}>
            <input
              type="text"
              placeholder='Title...'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder='Description...'
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            {/* value={category} */}
            <select  value={category}  onChange={(e) => setCategory(e.target.value)}>
              {categories.map((category) => (
                <option key={crypto.randomUUID()} value={category}>{category}</option>
              ))}
            </select>
            <button type="submit">Update</button>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default UpdateBlog