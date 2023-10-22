
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let $=document
    let inp=$.querySelector(".search-box")
    let temp=$.querySelector(".temp")
    let highLowTemp=$.querySelector(".hi-low")
    let city=$.querySelector(".city")
    let weather=$.querySelector(".weather")
    let date=$.querySelector(".date")

    const year=new Date().getFullYear()
    const month=new Date().getMonth()
    const day=new Date().getDay()

    
    let resultMonth=months[month]
    let resultday=days[day]

    inp.addEventListener("keyup",e=>{
        if(e.keyCode===13){
       
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&appid=fae72d41cca4242a248f54c19196b3c6
            `).then(res=>res.json())
            .then(data=>{
                
                city.innerHTML=`${data.name},${data.sys.country}`
                date.innerHTML=`${resultday} ${day+1} ${resultMonth} ${year}`
                weather.innerHTML=`${data.weather[0].main}`
               temp.innerHTML= `${Math.floor(data.main.temp-273.15)}<span>°c</span>`
               highLowTemp.innerHTML=`${Math.floor(data.main.temp_max-273.15)}°c /${Math.floor(data.main.temp_min-273.15)}°c`
            }).catch(err=>{
                alert("youre search is undefinde")
            })
        }
    })