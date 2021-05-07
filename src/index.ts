import express, { Application, NextFunction, Request, Response } from 'express'
import path from 'path'

const app: Application = express()
const PORT = process.env.PORT || 3001

app.use('/img', express.static(path.join(__dirname, '/public')))

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.get('/', (req: Request, res: Response) => {
  res.send('Express + Typescript Server')
})

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
})

export default app
