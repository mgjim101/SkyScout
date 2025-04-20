import { DateTime } from "luxon";

 const API_KEY ='a3330b4a1ac8e677cf431a1b871774c6';
 const BASE_URL = `https://api.openweathermap.org/data/2.5/`;

 /**
 * Adapter Pattern
 */
class WeatherAdapter {
    static adaptCurrentWeather(data) {
      if (!data) return {};
  
      const {
        coord: { lat, lon } = {},
        main: { temp, feels_like, temp_min, temp_max, humidity } = {},
        name,
        dt,
        sys: { country, sunrise, sunset } = {},
        weather = [],
        wind: { speed } = {},
        timezone,
      } = data;
  
      const { main: details = '', icon = '' } = weather[0] || {};
  
      return {
        temp,
        feels_like,
        temp_min,
        temp_max,
        humidity,
        name,
        country,
        sunrise: WeatherAdapter.formatToLocalTime(sunrise, timezone, 'hh:mm a'),
        sunset: WeatherAdapter.formatToLocalTime(sunset, timezone, 'hh:mm a'),
        speed,
        details,
        icon: WeatherAdapter.iconUrlFromCode(icon),
        formattedLocalTime: WeatherAdapter.formatToLocalTime(dt, timezone),
        dt,
        timezone,
        lat,
        lon,
      };
    }
  
    static adaptForecastWeather(currentTime, offset, data) {
      if (!data || !data.list) return { hourly: [], daily: [] };
  
      const hourly = data.list
        .filter((f) => f.dt > currentTime)
        .map((f) => ({
          temp: f.main.temp,
          title: WeatherAdapter.formatToLocalTime(f.dt, offset, 'hh:mm a'),
          icon: WeatherAdapter.iconUrlFromCode(f.weather[0].icon),
          date: f.dt_txt,
        }))
        .slice(0, 5);
  
      const daily = data.list
        .filter((f) => f.dt_txt.slice(-8) === "00:00:00")
        .map((f) => ({
          temp: f.main.temp,
          title: WeatherAdapter.formatToLocalTime(f.dt, offset, "ccc"),
          icon: WeatherAdapter.iconUrlFromCode(f.weather[0].icon),
          date: f.dt_txt,
        }));
  
      return { hourly, daily };
    }
  
    static formatToLocalTime(secs, offset, format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a") {
      return DateTime.fromSeconds(secs + offset, { zone: 'utc' }).toFormat(format);
    }
  
    static iconUrlFromCode(icon) {
      return `http://openweathermap.org/img/wn/${icon}@2x.png`;
    }
  }
  
  /**
   * Singleton Pattern
   */
  class WeatherAPIClient {
    static instance;
  
    constructor() {
      if (WeatherAPIClient.instance) {
        return WeatherAPIClient.instance;
      }
      WeatherAPIClient.instance = this;
    }
  
    async fetchWeatherData(endpoint, params) {
      const url = new URL(BASE_URL + endpoint);
      url.search = new URLSearchParams({ ...params, appid: API_KEY });
  
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch weather data: ${response.statusText}`);
      }
      return response.json();
    }
  }
  
  /**
   * Facade Pattern
   */
  class WeatherService {
    constructor() {
      this.apiClient = new WeatherAPIClient();
    }
  
    async getFormattedWeatherData(searchParams) {
      const currentWeather = await this.apiClient
        .fetchWeatherData('weather', searchParams)
        .then(WeatherAdapter.adaptCurrentWeather);
  
      const { dt, lat, lon, timezone } = currentWeather;
  
      const forecastWeather = await this.apiClient
        .fetchWeatherData('forecast', { lat, lon, units: searchParams.units })
        .then((data) => WeatherAdapter.adaptForecastWeather(dt, timezone, data));
  
      return { ...currentWeather, ...forecastWeather };
    }
  }
  
  // Export a single instance of the WeatherService
  const weatherService = new WeatherService();
  export default weatherService;