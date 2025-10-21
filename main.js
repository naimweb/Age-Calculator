const day = document.getElementById("birthday");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

function calculation() {
    const out = day.value;
    if(out === "") {
      alert("plz enter your birthday");
    }
    
    else {
        const age = getAge(out);

         result.innerHTML = `your age is ${age} ${age > 1 ? "years" : "year"} old`;

    }
}
    


function getAge(out) {
    const  currentdate = new Date();
    const  currentmonth = new Date(out);

    const age =currentdate.getFullYear() - currentmonth.getFullYear();
    const month = currentdate.getMonth() -  currentmonth.getMonth();


    if(month < 0 || month === 0 && currentdate.getDate() < currentmonth.getDate() ) {

         age--;

 }

 return age;
 
}



btn.addEventListener("click",calculation)