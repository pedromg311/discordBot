import 'dotenv/config';
import express from 'express';
import {
  InteractionType,
  InteractionResponseType,
  InteractionResponseFlags,
  MessageComponentTypes,
  ButtonStyleTypes,
} from 'discord-interactions';
import { VerifyDiscordRequest, DiscordRequest } from './utils.js';

export const createServer = client => {
	// Create an express app
	const app = express();
	// Get port, or default to 3000
	const PORT = process.env.PORT || 3000;
	// Parse request body and verifies incoming requests using discord-interactions package
	app.use(express.json({ verify: VerifyDiscordRequest(process.env.PUBLIC_KEY) }));

	return app;
}