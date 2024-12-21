import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB();

        // Ensure params is awaited before using it
        const { id } = params;  // Destructure to get the 'id' param
        const prompts = await Prompt.find({ creator: id }).populate("creator");

        return new Response(JSON.stringify(prompts), { status: 200 });
    } catch (error) {
        console.error("Failed to fetch prompts", error);
        return new Response("Failed to fetch all prompts", { status: 500 });
    }
};
