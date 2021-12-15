const { response } = require("express");

var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

function getNewsAndWeather() {
  // TODO: fetch을 이용해 작성합니다
  // TODO: 여러개의 Promise를 then으로 연결하여 작성합니다
  /*
  return fetch(newsURL)
  .then((resp) => resp.json())
  .then((json1) => {
  return fetch(weatherURL)
  .then((resp) => resp.json())
  .then((json2) => {
  return {
  news: json1.data,
  weather: json2,
  };
  });
  });
  */
 
  return fetch(newsURL)
  .then(resp=>resp.json())
  .then(json1=>{
    return fetch(weatherURL)
    .then(resp=>resp.json())
    .then(json2=>{
      return {news: json1.data, weather: json2}
    })
  })
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeather
  }
}