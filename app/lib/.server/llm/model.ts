import { createGroq } from '@ai-sdk/groq';

export function getGroqModel(apiKey: string) {
  const groq = createGroq({
    apiKey,
  });

  return groq('llama-3.1-70b-versatile');
}