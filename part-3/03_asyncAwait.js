var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

async function getNewsAndWeatherAsync() {
  // TODO: async/await 키워드를 이용해 작성합니다
  const news = await fetch(newsURL)
  .then(newsResult => 
    newsResult.json()
  )
  const weather = await fetch(weatherURL)
  .then(weatherResult => 
    weatherResult.json()
  )

  return { news: news.data, weather: weather};
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAsync
  }
}