    import express from 'express';
    import {config} from './config/config';
    import router from './routes/router';
    import cors from "cors";

    const app = express();

    app.use(cors({origin:true,credentials:true}))
    app.use('/',router);

    app.listen(config.server.port,()=>{
        console.log(`server is live at: http://localhost:${config.server.port}`)
    })