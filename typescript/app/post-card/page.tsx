import { postType } from '@/types/post.type'
import React from 'react'


const PostCard = ({title, body } : postType ) => {
  return (
    <div>
      <h1 className='font-bold'>{title}</h1>
      <p>{body}</p>
    </div>
  )
}

export default PostCard
