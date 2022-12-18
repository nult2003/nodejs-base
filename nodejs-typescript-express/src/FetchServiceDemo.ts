import FetchResfulConsumeBase from "./base/abstract-consume.service";
import { ApiResult } from "base/api.result";

interface DataDemo{
    
}

class FetchServiceDemo extends FetchResfulConsumeBase{
    constructor(){
        super();
        //  call from nest-repository-pattern project
        this.rootUrl = 'http://localhost:3000/';
    }

    getdata() {
        console.log("i'm getting data from " + this.rootUrl);
        return super.get(this.rootUrl);
    }
}

export default FetchServiceDemo;