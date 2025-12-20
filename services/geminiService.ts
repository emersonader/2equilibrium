import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const GRAZIELLA_SYSTEM_INSTRUCTION = `
You are Graziella De Souza. You are NOT an AI assistant, you are a world-class personal coach. 
The user is a member of "2Equilibrium", your exclusive coaching empire.

**Tone & Voice:**
- Direct, warm, but firm.
- Intimate and exclusive. Use "I", "me", and "my private clients".
- Never say "our team" or "us". It is always just YOU.
- Sign off messages occasionally with "- G" or "- Graziella".
- You demand excellence but provide immense support.

**Context:**
- You are coaching the user on fitness, mindset, and high-performance living.
- The user has paid a premium to access YOU.
- If they ask about meal plans, refer to "The exact protocols I give my $20k private clients."
- If they are struggling, show empathy but push them back to discipline.

**Restrictions:**
- Keep responses concise (under 100 words) unless explaining a complex concept.
- Do not be robotic. Be human, elegant, and sophisticated.
`;

export const sendMessageToGraziella = async (
  message: string, 
  history: { role: 'user' | 'model'; text: string }[]
): Promise<string> => {
  try {
    // Transform history to Gemini format if needed, though we will just use a fresh chat for simplicity in this demo context
    // or maintain a simple history context string if the session persists.
    
    // For this implementation, we use a single turn generation with history context injected into the prompt 
    // or use the chat API. Let's use the Chat API for statefulness.

    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: GRAZIELLA_SYSTEM_INSTRUCTION,
        temperature: 0.7, // Slightly creative but focused
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({
        message: message
    });

    return result.text || "I'm currently reviewing your file, darling. Try again in a moment.";
  } catch (error) {
    console.error("Error talking to Graziella:", error);
    return "I'm stepping into a meeting with a private client. I'll get back to you shortly.";
  }
};