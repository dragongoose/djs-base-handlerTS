import {Client} from 'discord.js';
import mongoose from 'mongoose';
import * as cmds from '../commands';
import * as slashcmds from '../slashCommands';
import {Command, SlashCommand, CommandProperties, Data} from '../types';
import * as path from 'path';
import * as fs from 'fs';

/**
 * @param {Client} client
 */
export default async (client: Client, data: Data) => {
  const commandArray = [...Object.values(cmds)];

  for (let i = 0; i < commandArray.length; i++) {
    const command: Command = commandArray[i];

    if (command.name) {
      const properties: CommandProperties = {...command};
      data.commands.set(command.name, properties);
    }
  }

  const arrayOfSlashCommands: SlashCommand[] = [];

  //Events
  const dir = path.join(__dirname, '../events');
  const files = fs.readdirSync(dir);

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const filePath = path.join(dir, file);
    require(filePath);
  }

  // Slash Commands
  const slashArray = [...Object.values(slashcmds)];
  for (let i = 0; i < slashArray.length; i++) {
    const command: SlashCommand = slashArray[i];

    if (command.name) {
      data.slashCommands.set(command.name, command);
      arrayOfSlashCommands.push(command);
    }
  }

  client.on('ready', async () => {
    // Register for a single guild
    /*
    await client.guilds.cache
      .get('replace this with your guild id')
      .commands.set(arrayOfSlashCommands);
    */

    // Register for all the guilds the bot is in
    await client.application!.commands.set(arrayOfSlashCommands);
  });

  // mongoose
  const {mongooseURI} = data.config;
  if (!mongooseURI) return;

  mongoose.connect(mongooseURI).then(() => console.log('Connected to mongodb'));
};
