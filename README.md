# Weather 
A webpage that will gives users the current weather in Manchester using the Open Weather API to get to retrieve the weather. 

Making a GET request to http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=<YOUR_API_KEY_HERE>

Data returned looks like this:
```
{"coord":{"lon":-2.24,"lat":53.48},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"base":"stations","main":{"temp":292.34,"pressure":1021,"humidity":42,"temp_min":291.15,"temp_max":293.15},"visibility":10000,"wind":{"speed":1.5,"deg":210},"clouds":{"all":36},"dt":1499881800,"sys":{"type":1,"id":5060,"message":0.0023,"country":"GB","sunrise":1499831784,"sunset":1499891536},"id":2643123,"name":"Manchester","cod":200}
```

There is detailed documentation [here](https://openweathermap.org/current)

Using XMLHttpRequest to retrieve and parse the data from the URL. The data presented is the decription of the weather and the temperature.

## Why Created?
Assignment for week 6 of MCRcodes to embed learning on API, AJAX requests and JSON.

## Future improvements
Changing the symbol based on the weather description or temperature



