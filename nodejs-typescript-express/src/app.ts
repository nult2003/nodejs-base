import * as express from "express";
import * as bodyParser from "body-parser";
class App{
    public app: express.Application;
    constructor(){
        this.app = express();
        this.config();
    }
    private config() {
        this.app.use(bodyParser.urlencoded({extended: false}));
    }

}

export default new App().app;