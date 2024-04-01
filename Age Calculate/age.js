document.querySelector('#submit').addEventListener("click",function(){
const update =function(){
    let dob = document.querySelector('#dob').value;
    let day = new Date(dob);
    let time = day.getTime();
    let today = new Date();
    let timenow = today.getTime();
    let value = timenow-time;
    let sec = Math.floor(value/(1000));
    let min = Math.floor(value/(1000*60));
    let hour = Math.floor(value/(1000*60*60));
    let days = Math.floor(value/(1000*60*60*24));
    let week = Math.floor(value/(1000*60*60*24*7));
    let month = Math.floor(value/(1000*60*60*24*30.4375));
    let year = Math.floor(value/(1000*60*60*24*365.25));

    let insert = function(x,y){
        document.querySelector(x).innerHTML = y;
    }
    insert("#year",year+"  Years");
    insert("#month",month+"  Months");
    insert("#week",week+"  Weeks");
    insert("#day",days+"  Days");
    insert("#hour",hour+"  Hours");
    insert("#min",min+"  Minutes");
    insert("#sec",sec+"  Seconds");
    
}

setInterval(update,1000)


})