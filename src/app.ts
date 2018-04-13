import express from 'express';


class App {
  public exp;

  constructor () {
    this.exp = express();
    this.mountRoutes()
  }

  private mountRoutes (): void {
    const router = express.Router()
    router.get('/', (req, res) => {
      res.json({
        message: 'Hello World!'
      })
    })
    this.exp.use('/', router)
  }
}

export default new App().exp