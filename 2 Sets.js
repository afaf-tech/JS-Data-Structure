/* Sets. */
// the Obj mySet is just an example to simplify our understanding
// due to the  fact that es6 has already contained Set constructor or Obj 
function mySet(){
    // the va collection wlll hold the set
    var collection = [];
    // this method will check for the  presence of an element and return true or false
    this.has = function(element){
        return (collection.indexOf(element) !==-1);
    }
    // this method will return all the  value in the set
    this.values = function(){
        return collection;
    };
    // this method will add an element to the set
    this.add = function(element){
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    }
    // this method will remove an element from a set
    this.remove = function(element){
        if(this.has(element)){
            index = collection.indexOf(element);
            collection.splice(index, 1);
            /* The splice() method adds/removes items to/from an array, and returns the removed item(s). */
            return true;
        }
        return false;
    }
    // this method returns the size of the collection
    this.size = function(){
        return collection.length;
    }

    // this method will return the union of two sets
    this.union == function(otherSet){
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(element => {
            unionSet.add(element);
        });
        secondSet.forEach(function(el){
            unionSet.add(e)
        });
        return unionSet;
    }

    //this method will return the intersection  of two sets as a new set
    this.intersection = function(otherSet){
        var intersectionSet =new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(el){
            if(otherSet.has(el)){
                intersectionSet.add(el);
            }
        });
        return intersectionSet;
    }
    // difference returning
    this.difference = function(otherSet){
        var differentSet =new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(el){
            if(!otherSet.has(el)){
                differentSet.add(el);
            }
        });
        return differentSet;
    }

    // this method will test if the set is a subset of a different set
    this.subset = function(otherSet){
        var firstSet = this.values();
        return firstSet.every(function(value){
            return otherSet.has(value);
        })
    }
}

console.log("MySET")
var SetA = new mySet();
var SetB = new mySet();

SetA.add("a");
SetA.add("Z");
SetA.add("X");
SetA.add("M");
SetB.add("b");
SetB.add("c");
SetB.add("a");
SetB.add("d");

// 
console.log("SUBSET")
console.log(SetA.subset(SetB));
console.log("INTERSECTION")
console.log(SetA.intersection(SetB).values());
console.log("DIFFEREMCE")
console.log(SetA.difference(SetB).values());
// cannot fill 'a' to the  sets caouse already exist.
SetA.add('a');
SetA.add('a');
SetA.add('a');
SetA.add('a');
console.log(SetA.values())

console.log("SET es6");
console.log("=====");
console.log("==========");
console.log("=====");
var SetC = new Set();
var SetD = new Set();

SetC.add("a");
SetC.add("Z");
SetC.add("X");
SetC.add("M");
SetD.add("b");
SetD.add("c");
SetD.add("a");
SetD.add("d");

// 
console.log(SetC.has('a'));
console.log(SetD.add('a'));




