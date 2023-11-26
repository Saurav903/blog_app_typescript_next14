'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import style from "../styles/blogclient.module.css";
import ImageLoading from './ImageLoading';

interface Blog {
  id: string;
  slug: string;
  custom_excerpt: string;
  title: string;
  feature_image_alt: string;
  // Add more properties if needed
}


interface BlogsclientType {
  posts:Blog
}

const Blogsclient: React.FC<BlogsclientType> = ({posts}) => {
  // console.log(posts);
  
  
const [loaded,setLoading] = useState<boolean>(false);

 
  return (
    <div>

      <div>


      <div className="transform card glass w-96 shadow-xl m-auto transition duration-500 hover:scale-105" key={posts.id}>
          <figure ><Link href={`/blogs/${posts.slug}`} >
            <div className='w-full h-80 object-cover'>
            {!loaded && (<ImageLoading/>)}
            <Image   src={posts.custom_excerpt} alt="Shoes" width={300} height={300} onLoad={(e)=>setLoading(true)} style={{opacity:loaded ? "1":"0",width:"500px",height:"300px",borderRadius:"10px"}} />
            </div>
            </Link></figure>
          <div className="card-body">
            <h2 className="card-title text-cyan-50">
              {posts.title}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            {/* <div dangerouslySetInnerHTML={{__html:el.html}}/> */}
            <div className="card-actions justify-start">
              <div className="badge badge-outline text-cyan-50">{posts.feature_image_alt}</div> 
            </div>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Blogsclient