// Adding variables to store our data
const userInput = document.querySelector('.field-input');
const userLeterPreview = document.querySelector('.plaque-prev');
const userPricePreview = document.querySelector('#plaquePrice');


//cout letter Fuction
//function countLetters(some_data){
    //console.log(some_data *5);
    //const optName = some_data.replaceAll(' ',' ')
    //const price = optName.lenght *5;

   // console.log('Username: ', some_data);
   // console.log('Price: ',price);

    //userLeterPreview.textContent = some_data;
    //userPricePreview.textContent = '$' + price;
//}

//countletters('Olayinka')
//countletters('Dapo')
//countletters('Henry')
//countletters('Rob')


const countLeters = (some_data) =>{
   const price = some_data.replace(' ', '').length * 5;
    userLeterPreview.textContent = some_data;
    userPricePreview.textContent = '$'+ price;
  }
  
  userInput.oninput = (e)=>{
    countLeters(e.target.value)
  }
  
 
  function validateinput() {
    var x = document.input["inputName"]["inputName"].value;
    if (x == "" || x == null) {
      alert("Name must be filled out");
      return false;
    }
  }

