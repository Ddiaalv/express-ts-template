import { Request, Response } from 'express'
import { mysqlConnection } from '../database/database'
import { MysqlError } from 'mysql'
import { Monsters } from '../models/monsters.models'
import { monstersQuery } from '../database/queries/monsters.queries'

export const getAllMonsters = (req: Request, res: Response) => {
  mysqlConnection.query(
    monstersQuery,
    (error: MysqlError | null, monsters: Monsters[]) => {
      if (error) {
        res.status(404).end()
      } else {
        const monstersHasNoContent = monsters !== undefined
        if (monstersHasNoContent) {
          res.json(monsters)
        } else {
          res.status(204).end()
        }
      }
    }
  )
}
