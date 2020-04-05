/*  Trie data structure */

let Node = function(){
    this.keys = new Map(); //
    /* On this Page Syntax Description Examples Polyfill Specifications Browser compatibility See also 
    The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. */
    this.end = false;
    this.setEnd = function(){
        this.end = true;
    }
    this.isEnd = function(){
        this.end;
    }
};


let Trie = function(){
    this.root = new Node();

    this.add = function(input,node=this.root){
        if (input.length ==0) {
            node.setEnd();
            return;
        }else if(!node.keys.has(input[0])){
            node.keys.set(input[0], new Node());
            return this.add(input.substr(1), node.keys.get(input[0]));
        }else{
            return this.add(input.substr(1), node.keys.get(input[0]));
        }
    }

    this.isWord = function(word){
        let node = this.root;
        while(word.length>1){
            if(!node.keys.has(word[0])){
                return false;
            }else{
                node = node.keys.get(word[0]);
                word = word.substr(1);
            }
        }

        return (node.keys.has(word) && node.keys.get(word).isEnd()) ? true: false;
    }

    this.print = function(){
        let words = new Array();
        // search function
        let search = function(node,string){
            if(node.keys.size != 0){
                for (let letter of node.keys.keys()) {
                    search(node.keys.get(letter), string.concat(letter));
                };
                if(node.isEnd()){
                    words.push(string);
                };
            }else{
                string.length > 0 ? words.push(string) : undefined;
                return;
            }
        }
        search(this.root, new String());
        return words.length > 0 ? words : null;
    }
}


myTrie = new Trie();
myTrie.add('ball');
myTrie.add('bat');

console.log(myTrie.isWord('doll'));
console.log(myTrie.isWord('dolr'));
console.log(myTrie.print());




/* For Of */
// const array1 = ['a', 'b', 'c'];

// for (const element of array1) {
//   console.log(element);
// }

// expected output: "a"
// expected output: "b"
// expected output: "c"


/* The concat() method is used to merge two or more arrays. 
This method does not change the existing arrays, but instead returns a new array. */


// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

// console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]