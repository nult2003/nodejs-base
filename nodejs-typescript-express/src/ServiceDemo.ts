import ResfulConsumeBase from "./base/abstract-consume.service";
import { ApiResult } from "base/api.result";

interface DataDemo{
    
}

class ServiceDemo extends ResfulConsumeBase{
    constructor(){
        super();
        this.rootUrl = 'http://localhost:3000/';
    }

    getdata() {
        console.log("i'm getting data from " + this.rootUrl);
        return super.get(this.rootUrl);
    }
}

export default ServiceDemo;