function main(input) {
    const manipulation = new Manipulate(input);
    console.log("whole word:", manipulation.wholeWord());
    console.log("reverse:", manipulation.reverse()); 
    console.log("sort:", manipulation.sort());
    console.log("sort desc:", manipulation.sortDesc());
    console.log("custom reverse:", manipulation.customReverse());
}

function Manipulate(input){

    var wholeWord1 = function(){
        var word = input.slice();
        word = word.join().replace(/,/g, " ");
        return "'" + word + "'";
    }
    this.wholeWord = wholeWord1;
    

    var reverse1 = function(){
        var reversedForm = input.slice();
        return reversedForm.reverse();
    }
    this.reverse = reverse1;


    var sort1 = function(){
        var sortedForm = input.slice();
        return sortedForm.sort() ;
    }
    this.sort = sort1;

    var sortDesc1 = function(){
        var sortedDescForm = input.slice();
        return sortedDescForm.sort().reverse();
    }
    this.sortDesc = sortDesc1;


    customReverse1 = function(){
        var customReverse = input.slice();
        customReverse.sort().reverse()
        var newArray = [];
        for(var i=0; i<customReverse.length; i++){
            newWordForm = customReverse[i].split('').reverse().join('');
            newArray.push(newWordForm);
        } 
        return newArray
    }

    this.customReverse = customReverse1;
}


main(["Kankunda", "Otim", "Oboth", "Araka", "Namula", "Atwine", "Wauyo"]);
