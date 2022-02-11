export class ConvertMapToJson{
    constructor(){}
    public ConvertMap(){
        let map = new Map<string, string>();
        map.set('one', 'value1');
        map.set('two', 'value2');
        map.set('three', 'value3');
        let jsonObject = {};
        map.forEach((value, key) => {
            jsonObject[key] = value;
        });

        console.log('Convert form Map to json by stringify: ',JSON.stringify(jsonObject))
    }

    es6FromEntries(){
        let map = new Map<string, string>();
        map.set('one', 'value1');
        map.set('two', 'value2');
        map.set('three', 'value3');
        const result = Object.fromEntries(map);
        console.log('convert from map to json by es6 fromentries: ', result);
    }
}