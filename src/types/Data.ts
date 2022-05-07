import {Collection} from 'discord.js';
import {Config, CommandProperties} from '.';

export interface Data {
  /**
   * The config file of the bot.
   * @type {Config}
   */
  config: Config;

  /**
   * All the bot's commands.
   * @type {Collection<string, CommandProperties>}
   */
  commands: Collection<string, CommandProperties>;

  /**
   * All the bot's slash commands.
   * @type {Collection<string, CommandProperties>}
   */
  slashCommands: Collection<string, CommandProperties>;
}
