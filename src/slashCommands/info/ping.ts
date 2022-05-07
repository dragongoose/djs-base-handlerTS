// eslint-disable-next-line prettier/prettier
import {Client, CommandInteraction} from 'discord.js';
import {CommandType} from '../../types';

export const ping = {
  name: 'ping',
  description: 'returns websocket ping',
  type: CommandType.ChatInput,
  options: [
    {
      name: 'example',
      description: 'This is a example option to demonstrate autocomplete',
      type: 3,
      autocomplete: true,
    },
  ],
  autocomplete: {
    example: ['Example 1', 'Example 2', 'Example 3'],
  },
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
