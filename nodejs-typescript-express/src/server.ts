import app from "./app";
import { ConvertMapToJson } from "./convertmap-to-json";
const PORT = 8080;
const mtj = new ConvertMapToJson();
app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)    
    mtj.ConvertMap();
    mtj.es6FromEntries();
})