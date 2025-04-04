const countryList =[
    "Afghanistan"
];
const resulBox = document.querySelector(
    ".results"

);
const inputBox = document.querySelector(
    ".search-bar"

);
const displayResults = function(result){
    const resultHTML = result.map(function (country) {
        return `<li onclick=selectInput(this)>
        
        ${country}
        
        </li>`;
    });
 resulBox.innerHTML='<ul' +
  resultHTML.join("")+
  '</ul>';
}

inputBox.onkeyup = function(e){
    let result = [];
    const input = inputBox.ariaValueMax.toLowerCase();
    if(inputBox.length === 0){
        resulBox.innerHTML = "";
    }
    if(input.length) {
        result = countryList.filter((country) => {
            return country.toLowerCase().includes(input);
        });
        displayResults(result);
    }
};
function selectInput(country){
    inputBox.value =country.innerHTML;
    resulBox.innerHTML = "" ;
};
