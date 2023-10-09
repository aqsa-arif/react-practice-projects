import React from 'react'
import PostCard from '../post-card/page';
import { postType } from '@/types/post.type';


async function getData() {
   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
   console.log(res);
   
   if(!res.ok){
      console.log('Error occured');
   }
   return res.json();
}


const PropsList = async () => {
    const data: postType[] = await getData();

  return (
    <div>
        {data.map((post) => (
            <PostCard key={post.id} {...post} />
        ))}
    </div>
  )
}

export default PropsList