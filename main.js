
// .toFixed will return a 2 decimal value 
function currency(value){
    value= value.toFixed(2);
    return `$ ${value}`
}

function formatSplit(value){
    
    if (value === 1) return `${value} person`;
    return `${value} people`
    
    
}

function update() {
 
  let bill = parseInt(document.getElementById("yourBill").value);
  let tip = parseInt(document.getElementById("tipInput").value);
  let split = parseInt(document.getElementById("splitInput").value);
  
  let tipValue = bill * (tip / 100);
  let tipEach = tipValue / split;
  let billEach =( bill+tipValue) / split;   
    
    
 document.getElementById("tipPercent").innerHTML =` ${tip} %`;
 document.getElementById("tipValue").innerHTML = currency(tipValue);
 document.getElementById("totalWithTip").innerHTML =currency(bill + tipValue);
 document.getElementById("splitValue").innerHTML = formatSplit(split);
 document.getElementById("billEach").innerHTML = currency(billEach);
 document.getElementById("tipEach").innerHTML = currency();   
    
    
    


}

let container = document.getElementById("container");
container.addEventListener("input", update);





// We couldve add the function to the main tag to call, the event on in put for al lthe element insde the main tag. but its better practice to add and ID to the main tag, on this example container id and on the java script, create a variable and adding and event listener calling up the function.
// with event listeners you use a dot notatation and inside parenthesis you add  2 values: ej

        // container.addEventListener("x", y), where X is the type of event and Y is the function to call. 