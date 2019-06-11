import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose'
import * as cors from 'cors';
// import { userRouter } from './routes';
import { config } from './config';


class App {
    public app: express.Application;
    constructor() {
        this.app = express();
        this.config();
        this.setupMongoDB();
    }

    private config = () => {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors());
        // this.app.use('/api/user', userRouter);


    }

    private setupMongoDB = () => {
        // mongoose.Promise = global.Promise;
        mongoose.connect(config.baseUrl, { useNewUrlParser: true })
    }
}
export default new App().app;

