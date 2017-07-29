function BasicCard(front, back) {

	this.front = front;
	this.back = back;
}


function ClozeCard (partial, cloze){
	this.partialText = partial;
	this.cloze = cloze;
   this.fullText = function() {
    return this.cloze + this.partialText;
  }

}

// }
	// this.partialText = function() {
 //    return this.text + this.cloze;
 //  }
//  function ClozeCard (partial, cloze){
// 	this.partialText = partial;
// 	this.partial = this.cloze;
// }


 

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

   
    console.log (firstPresident.front);
   
    console.log (firstPresident.back);


var firstPresidentCloze = new ClozeCard(
    "............ was the first president of the United States.", "George Washington");

console.log(firstPresidentCloze.cloze);

console.log(firstPresidentCloze.partialText);

console.log(firstPresidentCloze.fullText());


