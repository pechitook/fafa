/*
* ## Examples
* alta @pablito
*/

export default function (fafa) {
  fafa.hears(
    ['^alta (.*)$'], ['direct_message', 'direct_mention'],
    (bot, message) => {
      try {
        const name = message.match[1]
        // check if player exists
          // add player
        // else throw Exception
      } catch (e) {
        bot.reply(message, 'No se pudo agregar. Ya existe?')
      }

      return bot.reply(message, 'Alta correcta!')
    }
  )
}
