import * as express from 'express'
import {Router} from "./router";
import {View} from "./view";

class App {
  public express;

  constructor () {
      this.express = express();
      this.express.use(Router.get());
      View.set(this.express);
  }


}

export default new App().express
