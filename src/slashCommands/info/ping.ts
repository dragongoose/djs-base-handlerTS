// eslint-disable-next-line prettier/prettier
import {Client, CommandInteraction} from 'discord.js';
import {SlashCommand, CommandType} from '../../types';

export const ping: SlashCommand = {
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
    {
      name: 'example2',
      description: 'This is a example option to demonstrate autocomplete',
      type: 'CHANNEL',
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  run: async (client: Client, interaction: CommandInteraction, args: any) => {
    console.log(args);
    interaction.followUp({content: `${client.ws.ping}ms!`});
  },
};
