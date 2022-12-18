import app from "./app";
import { Express, Request, Response } from 'express';
import ServiceDemo from "./ServiceDemo";
import FetchServiceDemo from "./FetchServiceDemo";

const PORT = 8080;
let svc =  new ServiceDemo();
let svc1 = new FetchServiceDemo();
app.get('/', (req: Request, res: Response) => {    
    svc.getdata().then((ret) => {
        console.log("axios result:" + ret);
    });

    svc1.getdata().then((ret) => {
        console.log("fetch result:" + ret);
    });
    // var ret = svc1.getdata();
    // console.log("fetch result:" + ret);

    
    res.send('Express + TypeScript Server');
  });

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
})