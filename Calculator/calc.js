function add(){
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var out = Number(a)+Number(b);
    document.getElementById("output").innerText=`Sum of number is ${out}`
}
function sub(){
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var out = Number(a)-Number(b);
    document.getElementById("output").innerText=`Sum of number is ${out}`
}
function multiply(){
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var out = Number(a)*Number(b);
    document.getElementById("output").innerText=`Sum of number is ${out}`
}
function divide(){
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var out = Number(a)/Number(b);
    document.getElementById("output").innerText=`Sum of number is ${out}`
}