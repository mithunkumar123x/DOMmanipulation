//Examine the Document
//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.all[10]);
//document.all[10].textContent='Hello';

// make 2nd item change color in green
var secondItem = document.querySelector
('.list-group-item:nth-child(2)');
secondItem.style.color = 'green';


//not to know how make 3rd item is invinsible ,i am doing what video taught me
var odd= document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = '#f4f4f4' ;
    even[i].style.backgroundColor = '#f4f4f4';
}