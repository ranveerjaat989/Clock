setInterval(()=>{
    let date=new Date();
    let htime=date.getHours();
    let mtime=date.getMinutes();

    let stime=date.getSeconds();
    let day=document.querySelector("#day");
    let month=document.querySelector("#month");
    let Cdate=document.querySelector("#date");
    let year=document.querySelector("#year");
    let arrWeek=['Sun ','Mon','Tue','Wed','Thur','Fri','Sat'];
    let arrMonth=['Jan','Feb','March','April','May','June','July','August','Sept','Oct','Nov','Dec'];
    let thourse=document.querySelector("#hourse");
    let tminute=document.querySelector("#minute");
    let tsecond=document.querySelector("#second");
    let hrotation=30*htime+ mtime/2;
    let mrotation=6*mtime;
    let srotation=6*stime;
    let hourse=document.querySelector(".clock-hourse");
    let minute=document.querySelector(".clock-minute");
    let second=document.querySelector(".clock-second");
    hourse.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
    day.innerText=arrWeek[date.getDay()];  
    Cdate.innerText=date.getDate();
    month.innerText=arrMonth[date.getMonth()]+',';
    year.innerText=date.getFullYear();
   let a=1;
    if(htime<10){
        thourse.innerText=`0${htime}`;
    }
    else{
        thourse.innerText=htime;
    } 
    if(mtime<10){
        tminute.innerText=`0${mtime}`;
    }
    else{
        tminute.innerText=mtime;
    }
   
    if(stime<10)
    {
        tsecond.innerText=`0${stime}`;
    }
    else{
        tsecond.innerText=stime;
    }
    if(date.getMonth()==11&&date.getHours()==23&&date.getMinutes()==59&&date.getSeconds()==50&& a==1)
    {
      newYearStart();
      a++;
    }
},1000);
{/* <iframe src="https://cross-origin.com/myvideo.html" allow="autoplay"></iframe> */}
let mySound =  new Audio('0new-year.m4a');
let Ten=document.querySelector('#Ten');
let i=10;
let arrTen=[1,2,3,4,5,6,7,8,9,10];
newYearStart=()=>{
    setInterval(()=>{
        if(i!= -1){
            Ten.innerText=i;
            i--; 
        }
        else{  
            document.querySelector('.main').style.backgroundImage="url('./happy-new-year-new-year.gif')";
            document.querySelector('#Ten').style.fontSize='10rem';
            let k=1;
            let d=1;
            if(d==1)
            {
              
                mySound.play();
                mySound.play();
                setTimeout(()=>{
                  mySound.pause();
                },17000);
                d=0
            }
            newYearText(k);    
            document.querySelector('#Ten').style.color='RGB(214, 80, 118)'; 
            Ten.innerText='Happy New Year';      
        }   
},500)
}
newYearText=(k)=>{
    setInterval(()=>{         
        if(k==1){
            document.querySelector('#Ten').style.color='blue';
            document.querySelector('#Ten').style.fontSize='10rem';
            document.querySelector('#year').style.color='red';
            document.querySelector('#year').style.fontSize='5rem';
            k=0;
        }
        else{
            document.querySelector('#Ten').style.color='red';
            document.querySelector('#Ten').style.fontSize='12rem';
            document.querySelector('#year').style.color='blue';
            document.querySelector('#year').style.fontSize='4rem';
            k=1;
        }
    },500);
}
