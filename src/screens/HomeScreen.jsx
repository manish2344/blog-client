
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import classes from './categories.module.css'
// import jwt from 'jsonwebtoken';
import { MdOutlinePreview } from 'react-icons/md'
import { AiFillLike } from 'react-icons/ai'
import { FiArrowRight } from 'react-icons/fi'
function Home() {
  const [loading ,setloading]=  useState(true)
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([])
  const [activeCategory, setActiveCategory] = useState('all')
  const categories = [
    'all',
    'food',
    'laptop',
    'phone',
    
    'fun',
  
  ]
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    loadusser();
  }, []);
  const loadusser = async () => {
    var response = await axios.get("https://blog-website-serverside.onrender.com/api/blog/getall", {
      headers: { accesstoken: token },
    });
    setFilteredBlogs(response.data);
    setBlogs(response.data);
    setloading(false)
    console.log(response.data)
  };
  useEffect(() => {
    if(activeCategory === 'all'){
      setFilteredBlogs(blogs)
    } else {
      setFilteredBlogs((prev) => {
        const filteredBlogs = blogs.filter((blog) => blog.category.toLowerCase() === activeCategory.toLowerCase())

        return filteredBlogs
      })
    }
  }, [activeCategory])
  return (
    <>
      
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h3>Select a category</h3>
        <div className={classes.categoriesAndBlogs}>
          <div className={classes.categories}>
            {categories.map((category) => (
              <span
                key={crypto.randomUUID()}
                className={`${classes.category} ${activeCategory === category && classes.active}`}
                onClick={() => setActiveCategory(prev => category)}
              >
                {category}
              </span>
            ))}
          </div>
        {loading && <div className={classes.loading}>Loading.....</div>}
        
<div className={classes.blogs}>

              {filteredBlogs.map((blog) => (
               
              <div key={blog._id} className={classes.blog}>
                  <Link to={`/post/${blog._id}`}>
                    <img src={blog.avatar} />
                  </Link>
                  <div className={classes.blogData}>
                    <div className={classes.categoryAndMetadata}>
                      <span className={classes.category}>{blog.category}</span>
                      <div className={classes.metadata}>
                        <MdOutlinePreview /> {blog.views} views
                      </div>
                    </div>
                    <p className={classes.blogtitle}>{blog.title}</p>
                    <p className={classes.blogDesc}>
                      {blog.desc}
                    </p>
                    <Link to={`/post/${blog._id}`} className={classes.readMore}>
                      Read More <FiArrowRight />
                    </Link>
                  </div>
                </div>
              ))}

            </div>

        </div>
      </div>
    </div>


    </>
  );
}

export default Home;




// import React from 'react'

// function HomeScreen() {
//   return (
//     <div>HomeScreen</div>
//   )
// }

// export default HomeScreen