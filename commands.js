import 'dotenv/config';
import { capitalize, InstallGlobalCommands } from './utils.js';

// Simple test command
const GET_PEOPLE_IN_CALL_COMMAND = {
  name: 'get_users_in_vc',
  description: 'Get names of people in the call',
  type: 1,
};


const ALL_COMMANDS = [GET_PEOPLE_IN_CALL_COMMAND];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);