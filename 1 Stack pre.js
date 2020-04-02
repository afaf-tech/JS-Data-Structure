var letters = [];

var word = 'FikriLuv';

var rword = "";

// put letetrs of word into stack
for (let i = 0; i < word.length; i++) {
    letters.push( word[i]);
}

// pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
    // rword will save pop() results of letter
    rword += letters.pop();
}

if(rword ===word ){
    console.log(word + " is a palindrome.");
}else{
    console.log(word + " is not a palindrome.");
}

