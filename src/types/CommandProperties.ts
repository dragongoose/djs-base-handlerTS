import {Command} from '.';

/**
 * Properties for a command.
 * This can be ignored, as this
 * is only used for the handler
 * to register the commands.
 */
export interface CommandProperties extends Command {
  /**
   * The directory the command is in.
   * @type {string}
   */
  directory?: string;
}
