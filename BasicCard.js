function BasicCard(front, back) {

	this.front = front;
	this.back = back;
}

function ClozeCard(text, cloze) {
  this.text = text;
  this.cloze = cloze;

// function ClozeCard (partial, cloze){
// 	this.partialText = partial;
// 	this.cloze = cloze;
// }

// }
	// this.partialText = function() {
 //    return this.text + this.cloze;
 //  }
 function ClozeCard (partial, cloze){
	this.partialText = text;
	this.patial = this.cloze;
}


  this.fullText = function() {
    return this.text + this.cloze;
  }

}
var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

   
    console.log (firstPresident.front);
   
    console.log (firstPresident.back);


var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

console.log(firstPresidentCloze.cloze);

console.log(firstPresidentCloze.partialText);

console.log(firstPresidentCloze.fullText);


