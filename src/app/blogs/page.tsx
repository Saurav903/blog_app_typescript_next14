import React, { Suspense } from 'react';
import { getPosts } from '../services/ghost-config';




// const Blogsclient = dynamic(()=>import('../components/blogsclient'))
import Blogsclient from '../components/blogsclient';


const Posts = async() => {
    const post = await getPosts();
    console.log(post);
    
    
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-20 pt-40'>
      {post?.map((posts: { id: string,slug:string,custom_excerpt:string,title:string,feature_image_alt:string })=>{
      return <Blogsclient posts={posts} key={posts.id}/>
})}
    
      
    </div>
  )
}

export default Posts
