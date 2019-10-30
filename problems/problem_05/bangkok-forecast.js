const axios = require('axios');
const moment = require('moment');

const bangkokForecast = async () => {
  // put your code here !!
  let openweathermapAPI = 'https://api.openweathermap.org/data/2.5/forecast/daily?q=Bangkok,THA&cnt=7&appid=e5446373eef6128679c7fa8a1951d788&units=metric'
  try {
    let datas = await axios.get(openweathermapAPI)
    return datas.data.list.map((data, key) => {
      let date = moment(data.dt).format('YYYY-MM-DD'); 
      return { data: date, minTemp: data.temp.min, maxTemp: data.temp.max }
    })
  } catch (error) {
    throw new Error(error)
  }
};

module.exports = { bangkokForecast };
