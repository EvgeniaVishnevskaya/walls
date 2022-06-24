 //const url ="http://worldtimeapi.org/api/timezone/Europe/London";
//  fetch(url)
//  .then((resp) => resp.json())
//  .then (function(content){
//    console.log(content);
//    alert(content.active_spec_name);
//    })
//  .catch(function(error) {
//  console.log(error);
//  });

//  async function getResponse() {
//    let response = await fetch('http://worldtimeapi.org/api/timezone/Europe/London')
//    let content = await response.json()
//    console.log(content.splice(0,10));
//  }

let plus = 3; 
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://worldtimeapi.org/api/timezone/Europe/London', false); 
xhr.send(); 
if (xhr.status != 200) {
    console.log( xhr.status + ': ' + xhr.statusText ); 
} else {
    let time = xhr.responseText; 
    let z = JSON.parse(time).utc_datetime; 
    let time1 = new Date(z).getTime(); 
    let timestampPlus = time1 + (plus * 60 * 60 * 1000); 
    let timePlus = new Date(timestampPlus); 
    let result = timePlus.toUTCString();  
    console.log(result);
    console.log(time);

    let dayOfYear =  JSON.parse(time).day_of_year;
    let dayOfWeek =  JSON.parse(time).day_of_week;
    let weekNum =  JSON.parse(time).week_number;
    console.log(dayOfYear);
    console.log(dayOfWeek);
    console.log(weekNum);

    
    
      
    

    
}

