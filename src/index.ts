import express, { Application, NextFunction, Request, Response } from 'express'
import path from 'path'
import monstersRoutes from './routes/monsters.routes'

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

export const defaultMessage = 'Express + Typescript Server'
export const defaultObject = { name: 'David', lastname: 'Díaz Alvarez' }

app.get('/', (req: Request, res: Response) => {
  res.send(defaultObject)
})

// Routes
app.use(monstersRoutes)

const envIsNotTest = process.env.NODE_ENV !== 'test'
if (envIsNotTest) {
  app.listen(PORT, () =>
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
  )
}

export default app
