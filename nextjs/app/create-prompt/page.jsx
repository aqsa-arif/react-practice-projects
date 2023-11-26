"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form"; 
import { QueryClient, useMutation } from "@tanstack/react-query";
import { createPost } from "@utils/http";

const CreatePrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();
  // const queryClient = new QueryClient();
  const [queryClient] = useState(()  => new QueryClient());

  const [post, setPost] = useState({ prompt: "", tag: "" });
  
  const { mutate, data, isLoading, isError, error } = useMutation({
    mutationFn: createPost,
    onSuccess: (data, context) => {  
      queryClient.invalidateQueries({ queryKey: ['Prompts'] });
      console.log(data);     //First arg, Data recieved in response
      console.log(context);   //Second arg, Data which was sent 
      router.push('/');
    }, 
  }) 

  const createPrompt = async (e) => {
    e.preventDefault(); 
    console.log('calling mutate');
    mutate({ post, userId: session?.user.id });    
    console.log('called mutate');
  };

  return (
    <Form
      type='Create'
      post={post}
      setPost={setPost}
      submitting={isLoading}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;