var hash =(string, max)=>{
    var hash= 0;
    for (let i = 0; i < string.length; i++) {
        hash+=string.charCodeAt(i);        
    }
    return hash % max;
}


let HashTable = function(){

    let storage= [];
    const storageLimit = 14;

    this.print = function(){
        console.log(storage)
    }

    this.add = function(key,value){
        var index = hash(key, storageLimit);
        if(storage[index] ===undefined){
            storage[index] = [
                [key, value]
            ];
        }else{
            var inserted = false;
            for (let i = 0; i < storage[index].length; i++) {
                if(storage[index][i][0]===key) {
                    storage[index][i][1]=value
                    inserted = true;
                }            
            }
            if(inserted===false){
                storage[index].push([key,value]);
            }
        }
    }

    this.remove = function(key){
        var index= hash(key, storageLimit);
        if(storage[index].length ===1 && storage[index][0][0]===key){
            delete storage[index];
            //The JavaScript delete operator removes a property from an object; if no more references to the same property are held, it is eventually released automatically.

        }else{
            for (let i = 0; i < storage[index].length; i++) {
                if(storage[index][i][0]===key){
                    delete storage[index][i];
                }                
            }
        }
    };

    this.lookup= function(key){
        var index = hash(key, storageLimit);
        if (storage[index]===undefined) {
            return undefined;
        }else{
            for (let i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0]===key) {
                    return storage[index][i][1];
                }                
            }
        }
    }

};


console.log(hash('quincy',10));

let ht = new HashTable();

ht.add('beau', 'person');
ht.add('fido', 'dog');
ht.add('rex', 'dinosaurus');
ht.add('tux', 'pinguin');
ht.add('ta', 'pinguin');

console.log(ht.lookup('tux'));

ht.print();