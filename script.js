
//debugger;

function Compute() {
    event.preventDefault();

let Model1 = document.getElementById('M1').value;
let Model2 = document.getElementById('M2').value;
let  Model3 = document.getElementById('M3').value;
let B = document.getElementById('ExtraMarks').value;

console.log(B);

    // Multiply All Marks With 1.5

    let a = Model1*1.5;
    let b = Model2*1.5;
    let c = Model3*1.5;

    let Avg = (a+b)/2;

    let d = Avg/100;
    let e = c/100;

    var Internal=Math.round((d*15)+(e*15));
    var InternalMark= Internal+parseInt(B);

    console.log(InternalMark);

    
    
    document.getElementById('Internal').style.display='flex';
    document.getElementById('Internal').style.justifyContent='center';
    document.getElementById('Internal').style.alignItems='center';    
   document.getElementById('Internal').innerHTML= InternalMark;
   

}