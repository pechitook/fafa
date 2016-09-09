import Botkit from 'botkit'
import { initCommands } from 'commands/index'
import dotenv from 'dotenv'
dotenv.config()

export const whatToHear = ['direct_message', 'direct_mention']
export const fafa = Botkit.slackbot()
export const handler = fafa.spawn({
  token: process.env.SLACK_TOKEN
})

export function startBot() {
  handler.startRTM((err) => {
    if (err) {
      throw new Error('Could not connect to Slack')
    }
  })
  initCommands(fafa)
}
