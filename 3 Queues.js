/* Queues */

function Queue(){
    collection = [];

    this.print = function(){
        console.log(collection);
    }

    this.enqueue = function(element){
        collection.push(element);
    }

    this.dequeue = function(){
        return collection.shift(); 
        /* Shift Remove the first item of an array: */
    }

    this.front = function(){
        return collection[0];
    }

    this.size= function  () {
        return collection.length;
    }

    this.isEmpty = function(){
        return (collection.length === 0);
    }

}


var Q = new Queue();
Q.enqueue('a');
Q.enqueue('b');
Q.enqueue('c');
Q.print();
Q.dequeue();
var front = Q.front(); // paling depan
Q.print();

// Memberi Urutan di araay dengan number di index ke  duas
function PriorityQueue(){
    var collection = [];
    this.printCollection = function(){
        (console.log(collection));
    }
    this.enqueue= function(element){
        if(this.isEmpty()){
            collection.push(element);
        }else{
            var added = false;
            for (let i = 0; i < collection.length; i++) {
                if (element[1] < collection[i][1]) { //checking priorities
                    collection.splice(i,0,element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                collection.push(element);
            }
        }
    }

    this.dequeue = function(){
        var value = collection.shift();
        return value[0];
    }

    this.front= function(){
        return collection[0];
    }

    this.size = function () {
        return collection.length;           
    }
    this.isEmpty= function () {
        return (collection.length ===0);
    }

}
console.log("===========================================");

var PQ= new PriorityQueue();
PQ.enqueue(['Beau Aua',2]);
PQ.enqueue(['Nala N',3]);
PQ.enqueue(['Suda',1]);
PQ.enqueue(['Rifaaaa',2]);
PQ.printCollection();
PQ.dequeue();
PQ.front();
PQ.printCollection();