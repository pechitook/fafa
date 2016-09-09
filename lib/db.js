import knex from 'knex'
import bookshelf from 'bookshelf'

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: '../data/db.sqlite'
  }
})

export default bookshelf(db)

export const Player = bookshelf.Model.extend({
  tableName: 'players'
})

export const Game = bookshelf.Model.extend({
  tableName: 'games'
})
