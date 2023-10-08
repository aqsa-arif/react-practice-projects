import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database"; 
import { NextApiRequest, NextApiResponse } from "next";


export const POST = async (req, res ) => {
    const { userId, prompt, tag } = await req.json();    

    try {
        await connectToDB();
        const newPrompt = new Prompt({ creator: userId, prompt, tag });

        await newPrompt.save();
        console.log('saved', newPrompt); 
        return new Response(JSON.stringify(newPrompt), { status: 200 }) 
        
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}