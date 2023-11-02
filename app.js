setInterval(()=>{
    let date=new Date();
    let htime=date.getHours();
    let mtime=date.getMinutes();
    let stime=date.getSeconds();
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

    if(htime<10)
    {
        thourse.innerText=`0${htime}`;
    }
    else{
        thourse.innerText=htime;
    }
    
    if(mtime<10)
    {
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
   
},1000);

