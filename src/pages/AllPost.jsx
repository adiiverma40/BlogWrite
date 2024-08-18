
// import React, { useState, useEffect } from 'react';
// import { Container } from '../components/index';
// import { allPost  } from '../appwrite/Auth';
// import isUserLoggedIn from '../appwrite/Auth';
// import parse from 'html-react-parser';
// import PostCard from '../components/PostCard'; 
// import { useDispatch } from 'react-redux';
// import {post} from "../store/authSlice";
// import { useNavigate } from 'react-router-dom';

// import { login } from "../store/authSlice";
// function AllPost() {

//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null); 
//   const [images, setImages] = useState([]);
//   const [selectedContent, setSelectedContent] = useState(null); // State for selected post content
//   const dispatch = useDispatch()
//   const navigate = useNavigate()

//   function extractFirstImage(htmlContent) {
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(htmlContent, 'text/html');
//     const img = doc.querySelector('img');
//     return img ? img.src : 'https://placehold.co/1920x1080';
//   }


//   useEffect(() => {
//     async function checkLoggin(){
//     let promise = await isUserLoggedIn();
//     if (promise) {
//       dispatch(login({userData: promise , status: true}))
//       return null;
//     } else {
//       alert("Please Login");
//       navigate("/");
//     }}
//     checkLoggin()
   

//   }, []);
//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await allPost();
//         setPosts(response.documents); 
//         setLoading(false);
//         const imagesArray = response.documents.map(post => extractFirstImage(post.content));
//         setImages(imagesArray);
//       } catch (err) {
//         setError(err); 
//         setLoading(false); 
//       }
//     };

//     fetchPosts(); 
//   }, []); 

//   const handlePostClick = (content, title ,userId) => {
//     dispatch(post({title: title, content:content , email:userId }))
//     navigate('/post')
//     // Set the clicked post's content
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div className='pb-80'>
//       <Container display={'flex'} flex={'wrap'}>
//         {posts.length > 0 ? (
//           posts.map((post, index) => (
//             <PostCard 
//               key={index}
//               src={images[index]} 
//               index={index} 
//               title={post.title}
//               onClick={() => handlePostClick(post.content,post.title, post.userId )} // Handle click event
//             />
//           ))
//         ) : (
//           <p>No posts available</p>
//         )}
//       </Container>

//       {/* Render selected post content */}
//       {selectedContent && (
//         <div className="post-content">
//           {parse(selectedContent)} {/* Parse and display the content */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default AllPost;
import React, { useState, useEffect } from 'react';
import { Container } from '../components/index';
import { allPost } from '../appwrite/Auth';
import isUserLoggedIn from '../appwrite/Auth';
import parse from 'html-react-parser';
import PostCard from '../components/PostCard'; 
import { useDispatch } from 'react-redux';
import { post } from "../store/authSlice";
import { useNavigate } from 'react-router-dom';
import { login } from "../store/authSlice";

function AllPost() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
  const [images, setImages] = useState([]);
  const [selectedContent, setSelectedContent] = useState(null); 
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const POSTS_PER_PAGE = 8; // Define the number of posts per page
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function extractFirstImage(htmlContent) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const img = doc.querySelector('img');
    return img ? img.src : 'https://placehold.co/1920x1080';
  }

  useEffect(() => {
    async function checkLoggin(){
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
    const fetchPosts = async () => {
      try {
        const response = await allPost();
        setPosts(response.documents); 
        setLoading(false);
        const imagesArray = response.documents.map(post => extractFirstImage(post.content));
        setImages(imagesArray);
      } catch (err) {
        setError(err); 
        setLoading(false); 
      }
    };

    fetchPosts(); 
  }, []); 

  const handlePostClick = (content, title, userId) => {
    dispatch(post({ title: title, content: content, email: userId }));
    navigate('/post');
  };

  // Calculate the index range for the posts to display on the current page
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const displayedPosts = posts.slice(startIndex, endIndex);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='pb-80'>
      <Container display={'flex'} flex={'wrap'} >
        {displayedPosts.length > 0 ? (
          displayedPosts.map((post, index) => (
            <PostCard 
              key={index}
              src={images[startIndex + index]} 
              index={startIndex + index} 
              title={post.title}
              onClick={() => handlePostClick(post.content, post.title, post.userId)} // Handle click event
            />

          )
        
        
        )
        ) : (
          <p>No posts available</p>
        )}
         
      </Container>
      {currentPage > 1 && (
          <button onClick={() => setCurrentPage(currentPage - 1)}>
           <p className='fixed bottom-20 left-1/2 z-0'>   Previous Page </p>
          </button>
        )}
        {/* Show Next Page button if there are more posts */}
        {endIndex < posts.length && (
          <button onClick={() => setCurrentPage(currentPage + 1)}>
           <p className='fixed bottom-20 left-1/2 z-0'>  Next Page</p>
          </button>
        )}
      
     
    </div>
  );
}

export default AllPost;
