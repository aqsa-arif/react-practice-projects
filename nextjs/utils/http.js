import axios from "axios";
 

export  const fetchPosts = async () => {
    try {
      const {data} = await axios.get("/api/prompts"); 
      return data;

    } catch (error) {
      console.log(error);
      throw error;
    }   
};

export const createPost = async ({post, userId}) => { 
   
    try {
        const  response = await axios({
          url: "/api/prompts/new",
          method: "POST",
          data: {
            prompt: post.prompt,
            tag: post.tag,
            userId,
          },
        });
        return response;

      } catch (error) {
        console.log(error);
        throw error;
      }  
}

export const fetchPost = async ({ id }) => {
    try {
        const {data} = await axios(`/api/users/${id}/posts`); 
        return data;

      } catch (error) {
        console.log(error);
        throw error;
      }   
}

export const deletePost = async ({ id }) => {
  try {
    const response = await axios({
      url: `/api/prompts/${id}`,
      method: "DELETE",
    });

    if(response.status === 200) {
      return response.data;
    }

  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const getPromptDetails = async (promptId) => {
  try {
    const response = await axios(`/api/prompts/${promptId}`);  
    return response.data;  

  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updatePromptDetails = async ({promptId, post}) => {
  try { 
      const response = await axios({
        url: `/api/prompts/${promptId}`,
        method: "PATCH",
        data:  {
          prompt: post.prompt,
          tag: post.tag,
        },
      });

      return response.data;   
      
  } catch (error) {
    console.log(error);
    throw error;
  }
};