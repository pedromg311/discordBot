import 'dotenv/config';
import { capitalize, InstallGlobalCommands } from './utils.js';

// Simple test command
const GET_PEOPLE_IN_CALL_COMMAND = {
  name: 'get_users_in_vc',
  description: 'Get names of people in the call',
  type: 1,
};

const GET_PEOPLE_ON_CALL_WITH_ROLE = {
  name: 'get_users_in_vc_with_role',
  description: 'Get names of people in the call that have a specific role',
   options: [
    {
      type: 3,
      name: 'role',
      description: 'Pick a role',
      required: true,
    },
  ],
  type: 1,
};

const ALL_COMMANDS = [GET_PEOPLE_IN_CALL_COMMAND, GET_PEOPLE_ON_CALL_WITH_ROLE];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);