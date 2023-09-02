import React from "react";
import { useState } from "react";
import classes from "./blogDetails.module.css";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { format } from "timeago.js";
import {
  AiFillEdit,
  AiFillLike,
  AiFillDelete,
  AiOutlineArrowRight,
  AiOutlineLike,
} from "react-icons/ai";
import {BiHappy} from 'react-icons/bi'
const BlogDetails = () => {
  const navigate = useNavigate();
  const [blogDetails, setBlogDetails] = useState("");
  const { userInfo } = useSelector((state) => state.auth);
  const { _id } = useParams();
  useEffect(() => {
    loaduser();
  }, []);
  const loaduser = async () => {
    const options = { Authorization: `Bearer ${userInfo.token}` };
    const resource = await axios.get(
      `https://blog-website-serverside.onrender.com/api/blog/find/${_id}`,
      options
    );
    console.log(resource.data);
    setBlogDetails(resource.data);
    console.log("token", options);
  };

  const handleDeleteBlog = async (_id) => {
    try {
      await axios.delete(`https://blog-website-serverside.onrender.com/api/blog/deleteBlog/${_id}`, {
   
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className={classes.container}>
        <Link to="/" className={classes.goBack}>
          Go Back <AiOutlineArrowRight />
        </Link>
        <div className={classes.wrapper}>
          <img src={blogDetails?.avatar} />
          <div className={classes.titleAndControls}>
            <h3 className={classes.title}>{blogDetails?.title}</h3>
            {blogDetails?.userId?._id === userInfo.userdata._id ? (
              <div className={classes.controls}>
                <Link to={`/edit/${blogDetails?._id}`} className={classes.edit}>
                  <AiFillEdit />
                </Link>
                <div className={classes.delete}>
                  <AiFillDelete
                    // onClick={handleDeleteBlog}
                    onClick={() => handleDeleteBlog(blogDetails._id)}
                  />
                </div>
              </div>
            ) : (
              <h5 className={classes.happyface}><BiHappy/></h5>
            )}
          </div>
          <div className={classes.descAndLikesViews}>
            <p className={classes.desc}>
              <span>Description: </span>
              {blogDetails?.desc}
            </p>
          </div>
          <div className={classes.authorAndCreatedAt}>
            <span>
              <span>Author:</span> {blogDetails?.userId?.name}
            </span>
            <span>
              <span>Created At:</span> {format(blogDetails?.createdAt)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
