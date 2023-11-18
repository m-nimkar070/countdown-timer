const endDate = "18 November 2023 04:45 PM";
// 31 December 2023 00:00 AM    18 November 04:30 PM

document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input");

const timer = () =>{
    const end =new Date(endDate);
    const now = new Date();
    const diff = (end - now)/1000;
    // console.log(diff);

    if(diff < 0) return;
    //Days
    inputs[0].value=Math.floor(diff/3600/24)
    //Hours
    inputs[1].value=Math.floor((diff/3600)%24);
    //Minutes
    inputs[2].value=Math.floor((diff/60)%60);
    //Seconds
    inputs[3].value=Math.floor(diff)%60;
}

setInterval(
    ()=>{
        timer();
    }
);