
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import classes from './categories.module.css'
// import jwt from 'jsonwebtoken';
import { MdOutlinePreview } from 'react-icons/md'
import { AiFillLike } from 'react-icons/ai'
import { FiArrowRight } from 'react-icons/fi'
function Home() {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([])
  const [activeCategory, setActiveCategory] = useState('all')
  const categories = [
    'all',
    'food',
    'laptop',
    'phone',
    'design',
    'programming',
    'fun',
    'fashion'
  ]
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    loadusser();
  }, []);
  const loadusser = async () => {
    var response = await axios.get("http://localhost:5000/api/blog/getall", {
      headers: { accesstoken: token },
    });
    setFilteredBlogs(response.data);
    setBlogs(response.data);
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
                    <h4>{blog.title}</h4>
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