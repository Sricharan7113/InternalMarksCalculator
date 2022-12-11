
//debugger;

function Compute() {
    event.preventDefault();

let Model1 = document.getElementById('M1').value;
let Model2 = document.getElementById('M2').value;
let  Model3 = document.getElementById('M3').value;
let B = document.getElementById('ExtraMarks').value;


    // Multiply All Marks With 1.5

    let a = Model1*1.5;
    let b = Model2*1.5;
    let c = Model3*1.5;

    let Avg = (a+b)/2;

    let d = Avg/100;
    let e = c/100;

    var Internal=Math.round((d*15)+(e*15));

    if(Internal>30)
    {
        Internal=30;
    }
    var InternalMark= Internal+parseInt(B);

    console.log(InternalMark);

    document.getElementById('Internal').style.display='flex';
    document.getElementById('Internal').style.justifyContent='center';
    document.getElementById('Internal').style.alignContent='center';    



    if(InternalMark<=40 && InternalMark>0)
    {
       if (InternalMark<=40 && InternalMark>=30)
        {   
           document.getElementById('Internal').innerHTML="You have Scored "+InternalMark +" 😊";
        }

        else if (InternalMark<=29 && InternalMark>=23)
        {   
           document.getElementById('Internal').innerHTML="You have Scored "+InternalMark + " 🙂" ;
        }

        else if (InternalMark<=22)
        {   
           document.getElementById('Internal').innerHTML="You have Scored "+InternalMark + " 😓" ;
        }
    }

    else if (InternalMark>40) { 
        document.getElementById('Internal').innerHTML="You have Scored 40"+" 😊";
    }

    else if(Model1==0 || Model2==0 || Model3==0|| B==0 )
    {
        document.getElementById('Internal').innerHTML="Please Enter All The Marks...";
    }


    
    
    
   

}