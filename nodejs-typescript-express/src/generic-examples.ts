export class GenericsExamples{
    constructor(){}
    identity<Type>(arg: Type): Type{
        console.log("your type data: ", typeof(arg));
        return arg;
    }

}

export class GenericNumber<NumberType>{
    zeroValue: NumberType;
    add:(x: NumberType, y: NumberType) => NumberType;
}