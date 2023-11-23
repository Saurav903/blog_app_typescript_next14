import React, { Suspense } from 'react';
import { getPosts } from '../services/ghost-config';


import Loading from './loading';
import dynamic from 'next/dynamic';

const Blogsclient = dynamic(()=>import('../components/blogsclient'),{ssr:false})

const Posts = async() => {
    const posts = await getPosts();
    
  return (
    <div>
      <Suspense fallback={<Loading/>}>
      <Blogsclient posts={posts} />
      </Suspense>
      
    </div>
  )
}

export default Posts
