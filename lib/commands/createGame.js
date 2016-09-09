/*
* ## Examples
* pablito le ganó a palta 5 a 2
* pablito le ganó a palta 5-2
* pablito empató con palta 2 a 2
*/

import { whatToHear } from 'bot'

export default function (fafa) {
  fafa.hears(
    [/^(.*) (le ganó a|empató con) (.*) (\d) ?[a|\-] ?(\d)$/], whatToHear,
    (bot, message) => {
      try {
        const player1 = message.match[1]
        const player2 = message.match[3]
        const score1 = message.match[4]
        const score2 = message.match[5]
        const resultText = message.match[2]

        if (resultText.match('gano|empato')) {
          return bot.reply(message, 'Escribime con tildes o no te doy bola')
        }
        if (resultText.match('ganó')) {
          // confirmado que player1 ganó
          if (score1 < score2) {

          }
        }

      } catch (e) {
        bot.reply(message, 'No se pudo agregar. Ya existe?')
      }

      return bot.reply(message, 'Alta correcta')
    }
  )
}
