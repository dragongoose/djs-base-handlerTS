/**
 * The command file of the bot.
 */
export interface Config {
  /**
   * Discord token for the bot.
   * @type {string}
   */
  token: string;

  /**
   * The prefix for the bot.
   * This is the prefix that the bot will respond to.
   * For example, if the prefix is `!`, then the bot
   * will respond to `!help` and `!ping`.
   *
   * @type {string}
   */
  prefix: string;

  /**
   * The intents for the bot.
   * @type {number}
   */
  intents: number;

  /**
   * The mongoose URI for the bot.
   * This is the URI for the database.
   * @type {string}
   */
  mongooseURI: string;
}