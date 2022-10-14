for(let i=1 ; i<101 ; i++){
let myElement = document.createElement("div");
let myH3 = document.createElement("h3");
let myP = document.createElement("p");
let mySpan = document.createElement("span");
let h3Text = document.createTextNode(`Product # ${i}:`);
let pText = document.createTextNode(`Description of # ${i}:`);
myH3.appendChild(h3Text);
myP.appendChild(pText);
myElement.appendChild(myH3);
myElement.appendChild(myP);
myElement.style.background='linear-gradient(350deg,#00bf8f, #001510)';
myElement.style.boxShadow= "rgba(15, 25, 25, 0.9) -5px 5px 9px, rgba(25, 27, 27, .5) -10px -10px 10px 5px, rgba(30, 70, 50, .9) 3px 5px 3px inset";
myElement.style.height = '20rem';
// myElement.style.width = '20rem';
myElement.style.borderRadius="1rem";
myElement.style.padding="1rem";
myElement.style.margin="1rem";
myElement.style.color="white";
myElement.style.fontSize="1.7rem";
myElement.style.fontFamily="Monospace";
myElement.style.fontWeight="bold";
let sameEle =  document.body
sameEle.style.display="grid";
sameEle.style.background='linear-gradient(270deg,#73C8A9, #373B44)';
sameEle.style.gap="0.1rem";
sameEle.style.gridTemplateColumns="1fr 1fr 1fr";
mySpan.innerHTML= `# ${[i]}`;
sameEle.appendChild(myElement);
}
