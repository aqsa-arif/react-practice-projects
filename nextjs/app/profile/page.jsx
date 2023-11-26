"use client";

import { useSession } from "next-auth/react";
import {  useState } from "react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile"; 
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deletePost, fetchPost  } from "@utils/http";

const MyProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [myPosts, setMyPosts] = useState([]); 
  const queryClient = useQueryClient();
  

  if (session?.user.id){
    const {data, isLoading , isError, error} = useQuery({
      queryKey: ['Prompts', { params: session?.user.id }],
      queryFn: () => fetchPost({ id: session?.user.id }),
      onSuccess: (data) => {
        setMyPosts(data); 
      }
    })
  }

  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  const { mutate, data : deleteRes } = useMutation({
    mutationFn: deletePost,
    onSuccess: (deleteRes, context) => {
      queryClient.invalidateQueries({ 
        queryKey: ['Prompts', { params: session?.user.id }]
      });  
      console.log('On success');
    }
  });

  const handleDelete = async (post) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    );

    if (hasConfirmed) {
      mutate({ id: post._id })
    }
  };

  
  return (
    <Profile
      name='My'
      desc='Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination'
      data={myPosts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;