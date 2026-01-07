import { generateText, type ModelMessage } from "ai";
import "dotenv/config";
import type { AgentCallbacks } from "../types.ts";
import { SYSTEM_PROMPT } from "./system/prompt.ts";

export const runAgent = async (
	userMessage: string,
	conversationHistory?: ModelMessage[],
	callbacks?: AgentCallbacks,
) => {
	const { text } = await generateText({
		model: "openai/gpt-5-nano",
		prompt: userMessage,
		system: SYSTEM_PROMPT,
	});

	console.log(text);
};

runAgent("Hi, my name is Inam");
