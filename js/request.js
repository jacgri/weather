var request = new XMLHttpRequest()
request.open('GET','http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&units=metric&appid=b8e159c7fd7ab55ded8ee53d2b65f5b6')
request.onreadystatechange = function(){
    if (this.readyState===4 && this.status===200){
        var responseJSON = JSON.parse(this.response)
        var temperature = responseJSON.main.temp
        var weatherDescription = responseJSON.weather[0].description
            $("#description").html(function(){
            return(weatherDescription)
            })
         
            $("#temp").html(function(){
            return(temperature + ' ℃')
             })
    }
    $('#overlay').hide()

}
request.send()