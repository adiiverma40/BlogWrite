import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import isUserLoggedIn, { editPost } from "../appwrite/Auth";
import { login, post } from "../store/authSlice";
function Post() {
  const selector = useSelector((state) => state.auth);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [edit , setEdit] = useState(false)
//Check if blog is written by user

useEffect(()=>{
  if(selector.email){
      if (selector.email == selector.userData.email){
        setEdit(true)
      }
      else{
        return
      }}
}, [navigate, selector.title , selector.content])


  useEffect(() => {
    async function checkLoggin() {
      let promise = await isUserLoggedIn();
      if (promise) {
        dispatch(login({ userData: promise, status: true }));
        return null;
      } else {
        alert("Please Login");
        navigate("/");
      }
    }
    checkLoggin();
  }, []);
  useEffect(() => {
    if (selector.title) {
      setContent(selector.content);
      setTitle(selector.title);
    } else {
      navigate("/allPost");
    }
  }, [selector, navigate]);

    function handleEdit(){
      navigate("/editpost")
      let title = selector.title
      let content = selector.content
      let id = selector.$id
      dispatch(post({title:title , content:content , $id:id, edit:true}))
    }

  return (
    <>
      <p className="text-center flex justify-center items-center font-semibold m-5">
        {title}{" "}
       {edit ? (
        <img
        className="w-10 mx-10 hover:cursor-pointer "
          src="https://cloud.appwrite.io/v1/storage/buckets/66bb9492001a4acf4c99/files/66c223420012c0711860/view?project=66bb942c000a0fd256ae&mode=admin"
          alt="Edit Post"
        
          onClick={handleEdit}
        />) : (
          <></>
        )
      
      }
      </p>
      <div className="w-3/4 h-full p-10 mx-auto border m-5 shadow-lg mb-20">
        {parse(content)}
      </div>
    </>
  );
}

export default Post;
