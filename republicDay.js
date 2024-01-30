let time=new Date();
let month=time.getMonth()+1;
let day=time.getDay();
let date=time.getDate();



let ii=2;
 let Ten2=document.querySelector('#Ten');
setInterval(()=>{
    console.log(ii++)
    let time1=new Date();
    let rminute=time1.getMinutes();
    let rsecond=time1.getSeconds();
    let rmonth=time1.getMonth()+1;
    let rdate=time1.getDate()
    console.log(rmonth)
    if(rdate==26&&rmonth==1){
        republicDay();
    }
  
},500);


let republicDay=()=>{
        Ten2.innerText="Happy Republic Day";
        Ten2.style.fontSize="10rem";
        Ten2.style.color="#74c239";
        let textrotate=-15; 
        Ten2.style.transform = `rotate(${textrotate}deg)`;
        document.querySelector('.clock').style.opacity="0.7";
        document.querySelector(".main").style.backgroundImage="url('./indian_flag6.gif')"
        document.querySelector('.main').style.backgroundSize="cover";
        document.querySelector('.main').style.backgroundRepeat="no-repeat";
    } 





