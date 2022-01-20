//function for selecting the button
function calculator(selectedElement){
    const inputShow = document.getElementById("display").value;
    const finalShow = inputShow + selectedElement;
    document.getElementById("display").value = finalShow;
}
//function for equal button
const clickEqual = document.getElementById("equal");
clickEqual.addEventListener('click', function(){
    const equalVal = document.getElementById("display").value;
    const totalVal = eval(equalVal);
    document.getElementById("display").value = totalVal;
})

//function for clear all the result
const clearVal = document.getElementById("clear");
clearVal.addEventListener('click', function(){
    document.getElementById("display").value = "";
})

//function for permanently delete previous value
const del = document.getElementById("del");
del.addEventListener('click', function(){
    document.getElementById("display").value = "";

})
