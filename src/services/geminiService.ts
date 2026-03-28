
import { GoogleGenAI } from "@google/genai";

// Always initialize GoogleGenAI with a named parameter using process.env.API_KEY directly.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getPoemInsight = async (poemTitle: string, author: string) => {
  try {
    const response = await ai.models.generateContent({
      // Using gemini-3-pro-preview for complex literary analysis tasks.
      model: "gemini-3-pro-preview",
      contents: `请详细赏析唐诗《${poemTitle}》（作者：${author}）。包括作者背景、诗歌意境、名句分析和文学地位。请使用专业、典雅且富有感染力的中文，回答格式为Markdown。`,
      config: {
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "暂时无法获取AI赏析，请稍后再试。";
  }
};

export const searchPoemsAI = async (query: string) => {
  // Use gemini-3-flash-preview for basic text processing tasks like search mapping.
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `用户搜索 query: "${query}"。请问这可能指哪几首著名的唐诗？请只返回诗名和作者，格式为 JSON 数组：[{"title": "...", "author": "..."}]`,
      config: {
        responseMimeType: "application/json",
      }
    });
    return JSON.parse(response.text || "[]");
  } catch (error) {
    return [];
  }
};
