$(document).ready(function(){
    $('button').on('click', function(){
        var zip = parseInt($('#zip').val())
        makeCall(zip)
    })

    function makeCall(zip){
        fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=1306e2cd84819f1cfe926679328d7d63`)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            getData(res)
        })
    }

    function getData(res){
        let currentTemp = res.main.temp
        let weatherDescription = res.weather[0].description
        let temp_min = res.main.temp_min
        let temp_max = res.main.temp_max
        manipulateDom(currentTemp, weatherDescription, temp_min, temp_max)
    }

    function manipulateDom(currentTemp, weatherDescription, temp_min, temp_max){
        $('#current').html(`${currentTemp}`)
        $('#weather').html(`${weatherDescription}`)
        $('#min').html(`${temp_min}`)
        $('#max').html(`${temp_max}`)
    }

    const currentTemp = parseInt($('#current').html())
    if(currentTemp < 40){
        $('body').css('background-color', 'blue')
    }
    if(currentTemp > 90){
        $('body').css('background-color', 'red')
    }
})
