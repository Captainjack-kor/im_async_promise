var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

function getNewsAndWeatherAll() {
  // TODO: Promise.all을 이용해 작성합니다
  //fetch((newURL).then((resp)=>resp.json()));
  //thenthen 대신에 Promise.all을 두번써야함.
  /*
  .then(data => {
    let obj = {};
    obj = {news: data[0].data, weather: data[1]}
    return obj;
  })
  */
  return Promise.all([fetch(newsURL),fetch(weatherURL)])
  .then(([news,weather]) => Promise.all([news.json(),weather.json()]))
    .then(([newsjson,weatherjson]) => {
    return {news: newsjson.data, weather: weatherjson}
  })
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAll
  }
}