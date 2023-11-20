//Generates random password with a length equal to the number value input when either the Enter button is clicked or the Enter key is pressed, adding the password to the list and resetting the focus back to the input box. 
//Every password generated will have atleast one capital letter, one lowercase letter, one symbol, and one number. 
//Letters (both uppercase and lowercase) are the most common characters in the generated passwords. 
//Clicking the Clear button will clear the neccissary variables, reset the neccissary array lengths, and reset the focus back to the input box.
//Generated password will display the previously generated password multiple times if requirements for 1 of each type of character is not met. I would fix this by making it so that it does not continue the function & display somehting if those requirments are not met

//variables & constants
let input = document.getElementById("input"); //the box where the user enters a value
let entBtn = document.getElementById("entBtn"); //the Enter button
let clearBtn = document.getElementById("clearBtn"); //the Clear button
let output = document.getElementById("output"); //the box that displays the generated password(s)
const genPass = []; //
const genPassChars = [];
let pass = "";
let capLet = false;
let lowLet = false;
let sym = false;
let num = false;
let falseTrue=false;
let alreadyFalse=false;

//Make letters (capital & lowercase) more common than symbols and numbers
//Require at least one of each type of characters

window.addEventListener('keydown', function (event){
  if (event.keyCode == 13){
    enterInput(event.key);
  }
  else if (event.keyCode == 32){
    clearPass(event.key);
  }
}, false);

function enterInput(){
  capLet=false;
  lowLet=false;
  sym=false;
  num=false;
  pass= ""; //makes pass string empty so that it will not concatonate new pass with old pass
  if ((input.value<=20)&&(input.value>=8)){ //if number input is between 20 and 8
    for (let i=0; i<input.value;i++){//makes password length = user input (so charCodes/characters can be added later)
      genPass.push(""); //adds an empty string to the array every time the loop runs
      genPassChars.push(""); //adds an empty string to the array every time the loop runs
    }//end for
    for (let i=0; i<input.value;i++){ //declares index as 0, loop only runs while input is less than the specified password length, and adds 1 to the index
    let charType = Math.ceil(Math.random()*8);//generates a random number between 1 and 8. 1-3 = A-Z, 2-6 = a-z, 7 = !-/, and 8 = 0-9.
    if ((charType<=3)&&(charType>=1)){ //if the randomized number = 1-3, generate a random charCode A-Z
      capLet=true;
      genPass[i] = Math.ceil(Math.random()*26)+64;//character at current index = random charCode between 65 & 90
    }
    else if ((charType<=6)&&(charType>=2)){//if the randomized number = 2-6, generate a random charCode a-z
      lowLet=true;
      genPass[i] = Math.ceil(Math.random()*26)+96;//char at current index = random charCode between 96 & 122
    }
    else if (charType==7){//if the randomized number = 7, generate a random charCode !-/
      sym=true;
      genPass[i] = Math.ceil(Math.random()*14)+32;//char at current index = random charCode between 33 & 47
    }
    else{//if the randomized number = 8, generate a random charCode 0-9
      num=true;
      genPass[i] = Math.ceil(Math.random()*9)+47;//char at current index = random charCode between 48 & 57
    }
    genPassChars[i] += String.fromCharCode(genPass[i]);
    pass += genPassChars[i];
  }
  console.log(pass);
  if ((capLet==false)||(lowLet==false)||(sym==false)||(num==false)){
    console.log("false ");
    falseTrue=true;
    genPass.length = 0;
    genPassChars.length = 0;
    enterInput();
    alreadyFalse=true;
    output.innerHTML += "<br>" + "  " + pass;
    return;
  }//end if
  console.log(genPass);
  console.log(genPassChars);
  console.log(pass);
  input.value = "";
  input.focus();
  genPass.length = 0;
  genPassChars.length = 0; 
  if (falseTrue==true){

  }
  else{
   output.innerHTML += "<br>" + "  " + pass;//add break befoer pass 
  }
  falseTrue=false;
  }//end if
  else{//if number input is not between 20 and 8
    //clearPass(); //calls function that clears the list of generated passwords
    input.value = "";
    input.focus();
    output.innerHTML += "<br>"+"Please enter a number between 8 and 20.";
  }//end else
  //console.log(capLet + " " + lowLet + " " + sym + num);
}//end function

entBtn.onclick = function(){ //Function on Enter button click
  enterInput();
}//end function

function clearPass(){
    input.value = "";
    pass = "";
    output.innerHTML = "Generated passwords:";
    genPass.length = 0;
    genPassChars.length = 0;
    input.focus(); 
}//end function

clearBtn.onclick = function(){
  clearPass();
}//end function
//65-90 (A-Z), 97-122 (a-z), 33-47 (!-/), 48-57 (0-9)
//there is max 77 options per char
//randomize num between 1 and 3, if 1, A-Z, if 2, a-z, if 3, !-9

