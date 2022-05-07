// eslint-disable-next-line prettier/prettier
import { Client, CommandInteraction } from 'discord.js';
import {CommandType} from '../../types';

export const ping = {
  name: 'ping',
  description: 'returns websocket ping',
  type: CommandType.ChatInput,
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} _args
   */
  // eslint-disable-next-line prettier/prettier
  run: async (client: Client, interaction: CommandInteraction) => {
    interaction.followUp({content: `${client.ws.ping}ms!`});
  },
};
