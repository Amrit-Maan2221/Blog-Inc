import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {axoisInstance} from "../util/constants.js";

const Home = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axoisInstance.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);
  

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              {post.img && <img src={`${post.img}`} alt="" />}
              {(!post.img) && <h2>{post.title}</h2>}
              {post.img && <img src={`../upload/${post.img}`} alt="" />}
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{getText(post.desc)}</p>
              <button >Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home