import React from 'react';

function PostCard({title, src, index ,onClick}) {
  return (
    <div onClick={onClick} className="card-hover rounded-lg shadow-lg hover:cursor-pointer" key={index}
    style={{width:"20%",
        height:'60%',
        margin:"10px",

    }}
    >
      <div className="card-hover__content">
        <h3 className="card-hover__title">
        {title}
        </h3>
        <a href="#" className="card-hover__link">
         
          <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>        
        </a>
      </div>
      <img src={src} alt=""/>
    </div>

  );
}

export default PostCard;