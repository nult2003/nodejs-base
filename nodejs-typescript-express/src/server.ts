import app from "./app";
import { Express, Request, Response } from 'express';
import ServiceDemo from "./ServiceDemo";

const PORT = 8080;
let svc =  new ServiceDemo();
app.get('/', (req: Request, res: Response) => {    
    svc.getdata().then((ret) => {
        console.log("result:" + ret);
    });
    
    res.send('Express + TypeScript Server');
  });

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
})