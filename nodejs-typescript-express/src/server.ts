import app from "./app";
import { GenericsExamples, GenericNumber } from "./generic-examples";
const PORT = 8080;
const gex = new GenericsExamples();
const gen = new GenericNumber<number>();
const ges = new GenericNumber<string>();
app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
    // generic type
    gex.identity<string>('hello');
    gex.identity<number>(1);
    gex.identity<Date>(new Date());

    // generic class
    gen.zeroValue = 0;
    // definition a function
    gen.add =  (x,y) => {
        return x + y;
    }
    let total = gen.add(1, 1);
    console.log("total number value: ", total);

    // generic class
    ges.zeroValue = "value: ";
    // definition a function
    ges.add =  (x,y) => {
        return x + y;
    }
    console.log('total string value: ', ges.add(ges.zeroValue, "test"));
})