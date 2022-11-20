import React from 'react';
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from '../components/Menu';

function Single() {
    const post = {
        id: 2,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
        img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        username: "Amrit",
        userImg: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        cat: "Software Development"
      }
  return  (
    <div className="single">
      <div className="content">
        {/* <img src={`../upload/${post?.img}`} alt="" /> */}
        <img src={`${post.img}`} alt="" />
        <div className="user">
          {post.userImg && <img
            src={post.userImg}
            alt=""
          />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted 
                {/* {moment(post.date).fromNow()} */}
                </p>
          </div>
          {/* {currentUser.username === post.username && ( */}
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <img src={Edit} alt="" />
              </Link>
              <img 
            //   onClick={handleDelete} 
              src={Delete} 
              alt="" />
            </div>
          {/* )} */}
        </div>
        <h1>{post.title}</h1>
        <p
        //   dangerouslySetInnerHTML={{
        //     __html: DOMPurify.sanitize(post.desc),
        //   }}
        >
            {post.desc}
            </p>      </div>
      <Menu cat={post.cat}/>
    </div>
  );
}

export default Single