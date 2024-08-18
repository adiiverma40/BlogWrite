import React, { useState, useEffect } from 'react';
import { Container } from '../components/index';
import { allPost } from '../appwrite/Auth';
import parse from 'html-react-parser';
import PostCard from '../components/PostCard'; 

function AllPost() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
  const [images, setImages] = useState([]);

  function extractFirstImage(htmlContent) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const img = doc.querySelector('img');
    return img ? img.src : null;
  }

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='pb-80'>
    <Container display={'flex'} flex={'wrap'} >
 
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <PostCard src={images[index]} index={index} title={post.title}/>
           
//           <div className='w-40 shadow-xl mx-auto pb-24 rounded' key={index}
//           style={{backgroundImage: `url(${images[index]})`,
//             backgroundSize:'cover',
//             backgroundPosition:'center'
//         }}

//           >
//             {/* <img className='w-full ' src={images[index]} alt="" /> */}
//             <h2 className='text-center text-white  p-3'>{post.title}</h2>
            
            
//             {/* <div>{parse(post.content)}</div> */}
         
// {/*          
//             {images[index] && (
//               <div>
//                 <img src={images[index]} alt={`Post ${index} image`} />
//               </div>
//             )} */}


//           </div>
        ))
      ) : (
        <p>No posts available</p> 
      )}
 
    </Container>
    </div>
  );
}

export default AllPost;
