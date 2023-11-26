"use client";

import {  useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form"; 
import {  useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getPromptDetails, updatePromptDetails } from "@utils/http";

const UpdatePrompt = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");

  const [post, setPost] = useState({ prompt: "", tag: "", }); 


  if(promptId){
    const  { data } = useQuery({
      queryKey: ['Prompts', { search : promptId  } ],
      queryFn: () => getPromptDetails(promptId),
      onSuccess: (data) => {
        setPost({
          prompt: data.prompt,
          tag: data.tag,
        }); 
      }
    })
  }
 
  const { mutate, data, isLoading } = useMutation({
    mutationFn: updatePromptDetails,
    onMutate: async (requestedData) => {
      await queryClient.cancelQueries({ queryKey: ['Prompts'] });
      const storedData = queryClient.getQueryData(['Prompts', { search : promptId }]);
      queryClient.setQueryData(['Prompts', {search: promptId }], requestedData );

      return { storedData };
    },
    onError: (error, data, context) => {
      console.log(context);
      console.log(data.post);
      console.log(error);
      queryClient.setQueryData(['Prompts', {search: promptId }], context.storedData );
    },
    onSuccess: () => {
      router.push("/");
    },
    // onSettled: () => {
    //   queryClient.invalidateQueries({ queryKey: ['Prompts', {search: promptId }] })
    // }
  })

  const updatePrompt = async (e) => {
    e.preventDefault();
    if (!promptId) return alert("Missing PromptId!");

    mutate({ promptId, post });
  };

  return (
    <Form
      type='Edit'
      post={post}
      setPost={setPost}
      submitting={isLoading}
      handleSubmit={updatePrompt}
    />
  );
};

export default UpdatePrompt;