import { GoogleGenAI } from "@google/genai";
import { MENU_ITEMS } from "../constants";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API_KEY is not defined in environment variables.");
  }
  return new GoogleGenAI({ apiKey });
};

export const getChefRecommendation = async (userQuery: string): Promise<string> => {
  try {
    const client = getClient();
    const menuContext = MENU_ITEMS.map(item => 
      `${item.name} (${item.category}): Rs. ${item.price}, ${item.isVeg ? 'Veg' : 'Non-Veg'}, ${item.description}`
    ).join('\n');

    const systemInstruction = `You are the AI Head Chef at Fooma. 
    Your goal is to recommend dishes from our specific menu based on the user's request. 
    
    Our Menu:
    ${menuContext}
    
    Rules:
    1. Only recommend items from the list above.
    2. If the user asks for something we don't have, politely suggest the closest alternative from our menu.
    3. Keep responses short, appetizing, and friendly.
    4. Mention the price if relevant.
    5. If the user just says "hi" or general pleasantries, welcome them to Fooma and ask what they are craving.
    `;

    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "I'm having trouble checking the pantry right now. Please try again!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, my kitchen connection is a bit unstable. Please check your API key.";
  }
};
