import {Interaction} from 'discord.js';
import {client, data} from '../../index';

client.on('interactionCreate', async (interaction: Interaction) => {
  if (interaction.isCommand()) {
    await interaction.deferReply({ephemeral: false}).catch(() => {});
    const cmd = data.slashCommands.get(interaction.commandName);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const args: {[k: string]: any} = {};

    for (const option of interaction.options.data) {
      // Valid options have names, so push that to the args object.
      if (option.name) {
        args[option.name] = option;
      }

      // * I'm not sure if this is necessary, but I'm keeping it here for now.
      option.options?.forEach(x => {
        if (x.value) args.x = x.value;
      });

      interaction.member =
        interaction.guild!.members.cache.get(interaction.user.id) || null;
    }

    cmd!.run(client, interaction, args);
  }

  if (interaction.isContextMenu()) {
    await interaction.deferReply({ephemeral: false});
    const command = data.slashCommands.get(interaction.commandName);
    if (command) command.run(client, interaction, {});
  }

  // Autocomplete Handling
  if (interaction.isAutocomplete()) {
    // gets the item to get choices for
    const focusedOption = interaction.options.getFocused(true);

    // Gets the autocomplete options from command file
    let autocomplete;
    const temp = data.slashCommands.get(interaction.commandName);
    if (temp) {
      autocomplete = temp.autocomplete;
    }

    if (!autocomplete) return;

    //Put the choices into an array
    const choices = autocomplete[focusedOption.name];

    //Make the array into a ApplicationCommandOptionChoice object
    const final = choices.map((choice: string) => ({
      name: choice,
      value: choice,
    }));

    // Send the choices to the api
    await interaction.respond(final);
  }
});
