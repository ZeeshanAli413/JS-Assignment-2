let cities=["Faisalabad", "Karachi", "Lahore", "Burewala", "Layyah","Islamabad","Kashmir"]
let orignalText="I love my country Paistan.<br>I love my city Faisalabad.<br>I love my Homeland."
document.getElementById('orignalText').innerHTML= orignalText;
function lowerCase(){
    let lowerCaseText=orignalText.toLowerCase();
    document.getElementById('output').innerHTML=lowerCaseText;
}
function UpperCase(){
    let UpperCaseText=orignalText.toUpperCase();
    document.getElementById('output').innerHTML=UpperCaseText;
}
function capitalize(){
    document.getElementById('output').style.textTransform="capitalize";
    document.getElementById('output').innerHTML=orignalText; 
}
function betterFormatting(){
    let text=document.getElementById('display').value;
    if(!text){
        alert('please enter the text.')
        return;
    }
    let text1=text.toLowerCase();
    document.getElementById('output').style.textTransform="capitalize";
    document.getElementById('output').innerHTML=text1; 
}
document.getElementById('btn3').onclick=function(){
    document.getElementById('output').innerHTML="";
    for(let i=0; i<cities.length; i++)
    {
    let num=i+1
        document.getElementById('output').innerHTML += num + ')' + cities[i] + '<br>';
}}
function addcity(){ 
    let city=document.getElementById('display').value;
    if(city.length < 3)
    {
        alert('please enter correct name of city.');
        return;
    }

    // let cityFirstletter=city.slice(0,1).toUpperCase();
    let cityFirstletter=city.charAt (0).toUpperCase();
    // console.log(cityFirstletter); 
    let cityAllLetters = city.slice(1).toLowerCase();
    // console.log(cityAllLetters);
    let cityWordCapitalize = cityFirstletter + cityAllLetters;
    // console.log(cityWordCapitalize);
    let cityFound = false;
    for(let i = 0; i < cities.length; i++)
    {
        if(cities[i]=== cityWordCapitalize)
        {

            cityFound=true;
        let html='<span style="color:red; font-size: 20px;">"' + cityWordCapitalize + ' "</span> is already in list.';
        document.getElementById('output').innerHTML = html;
        }
    }
    if(cityFound === false)
{
     cities.push(cityWordCapitalize);
     let html = '<span style="color:green; font-size:20px ;">" '+ cityWordCapitalize +' "</span> has been successfully added city';
    document.getElementById('output').innerHTML= html;
}}
function checkCity(){
    let city=document.getElementById('display').value;
    if(!city)
    {
        alert('please enter your name of city.');
        return;
    }
      // let cityFirstletter=city.slice(0,1).toUpperCase();
      let cityFirstletter=city.charAt (0).toUpperCase();
      // console.log(cityFirstletter); 
      let cityAllLetters = city.slice(1).toLowerCase();
      // console.log(cityAllLetters);
      let cityWordCapitalize = cityFirstletter + cityAllLetters;
      // console.log(cityWordCapitalize);
      let cityFound = false;
      for(let i = 0; i < cities.length; i++)
      {
          if(cities[i]=== cityWordCapitalize)
          {
  
              cityFound=true;
          let html='<span style="color:green; font-size: 20px;">"' + cityWordCapitalize + ' "</span> found in list. &#128151;';
          document.getElementById('output').innerHTML = html;
          }
      }
      if(cityFound === false)
  {
      
       let html = "SORRY &#128524; We coudIn\"t find your city <span style='color:red; font-size:20px ;'>' " + cityWordCapitalize +' "</span> in list. <br> Click <span style=" color: green; font-size: 16px;"> Add Your City In List"</span> to add your city in list &#128522;'
      document.getElementById('output').innerHTML= html;
  
}}

function findWord() {
    let newOrgString = orignalText.toLowerCase();
    let text = document.getElementById("display").value;
    text = text.toLowerCase();
    if (!text) {
        // alert("Please Enter Text To Search!");
        Toastify({
            text: "Please enter word to find.",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: false, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #ff1111, #ff4545)",
            },
        }).showToast();
        return;
    }
    let findText = newOrgString.indexOf(text);
    if (findText !== -1) {
        let result = '<span> Your text <span style="color: green;">"' + text + '"</span> is found at index: ' + findText + '</span>';
        document.getElementById("output").innerHTML = result;
        Toastify({
            text: "Your word found successfully.",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: false, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
        }).showToast();
    }
    else {
        let result = '<span> Your text <span style="color: red;">"' + text + '"</span> is not found.</span>';
        document.getElementById("output").innerHTML = result;
        Toastify({
            text: "Your word not found.",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: false, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #ff1111, #ff4545)",
            },
        }).showToast();
    }
}

 function replaceWord() {
    let newOrgString = orignalText.toLowerCase();
    let replace = document.getElementById("display").value;
    replace = replace.toLowerCase();
    replace = new RegExp(replace, 'g');
    if (!replace) {
        alert("Please Enter Text To Search!");
        return;
    }
    let replaceWith = prompt("Enter text you want to replace with.");
    if (!replaceWith) {
        alert("Please enter text you want to replace with!")
    }
    replaceWith = replaceWith.toLowerCase();
    let replaceWord = newOrgString.replace(replace, replaceWith);
    document.getElementById("output").innerHTML = replaceWord;
}















document.getElementById('org').onclick=function(){
    document.getElementById('output').innerHTML=" "
}
document.getElementById('clear').onclick=function(){
    document.getElementById('display').value=" "
}
  