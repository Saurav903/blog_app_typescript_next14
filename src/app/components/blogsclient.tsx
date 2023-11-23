'use client'

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import style from "../styles/blogclient.module.css";


const Blogsclient = ({posts}) => {
  // console.log(posts);


 
  return (
    <>

      

      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-20 pt-40'>


        {posts?.map((el)=>(
          <div className="transform card glass w-96 shadow-xl m-auto transition duration-500 hover:scale-105" key={el.id}>
          <figure ><Link href={`/blogs/${el.slug}`} ><Image   src={el.custom_excerpt} alt="Shoes" width={300} height={300} style={{width:"500px",height:"300px",borderRadius:"10px"}}/></Link></figure>
          <div className="card-body">
            <h2 className="card-title text-cyan-50">
              {el.title}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            {/* <div dangerouslySetInnerHTML={{__html:el.html}}/> */}
            <div className="card-actions justify-start">
              <div className="badge badge-outline text-cyan-50">{el.feature_image_alt}</div> 
            </div>
          </div>
        </div>
        ))}


      </div>

    </>
  )
}

export default Blogsclient