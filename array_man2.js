
function Manipulate(input){
    this.input = input;
}

function main(input) {
    const manipulation = new Manipulate(input);
    console.log("whole word:", wholeWord.call(manipulation));
    console.log("reverse:", reverse.call(manipulation)); 
    //console.log("sort:", manipulation.sort());
    //console.log("sort desc:", manipulation.sortDesc());
    //console.log("custom reverse:", manipulation.customReverse());
}

wholeWord = function(){
    var word = this.input.slice();
    word = word.join().replace(/,/g, " ");
    return "'" + word + "'";
}

reverse = function(){
    var reversedForm = this.input.slice();
    return reversedForm.reverse();
}

main(["Kankunda", "Otim", "Oboth", "Araka", "Namula", "Atwine", "Wauyo"]);


