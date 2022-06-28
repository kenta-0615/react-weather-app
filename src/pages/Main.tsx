import React, { useState, useEffect } from "react";
import { LeftScreen } from "../components/main/LeftScreen";
import { RightScreen } from "../components/main/RightScreen";
import axios from "axios";
import { WeatherAPI } from "../types";
import { Weather } from "src/components/common/WeeklyWeather";

const initialWeatherData: WeatherAPI = {
  publicTime: "",
  publicTimeFormatted: "",
  publishDate: "",

  publishTimeFormatted: "",
  title: "",
  link: "",
  description: {
    publicTime: "",
    publicTimeFormatted: "",
    headlineText: "",
    bodyText: "",
    text: "",
  },

  forecasts: [
    {
      date: "",
      dateLabel: "",
      telop: "",
      detail: {
        weather: "",
        wind: "",
        wave: "",
      },
      temperature: {
        min: {
          celsius: "",
          fahrenheit: "",
        },
        max: { celsius: "", fahrenheit: "" },
      },
      chanceOfRain: {
        T00_06: "",
        T06_12: "",
        T12_18: "",
        T18_24: "",
      },
      image: {
        title: "",
        url: "",
        width: 0,
        height: 0,
      },
    },
  ],
  location: {
    area: "",
    prefecture: "",
    district: "",
    city: "",
  },
  copyright: {
    time: "",
    link: "",
    image: "",
    provider: "",
  },
};

export const Main: React.FC = () => {
  const [weatherData, setWeatherData] =
    useState<WeatherAPI>(initialWeatherData);

  const weathersAfterTomorrow: Weather[] = weatherData.forecasts
    .filter((weather) => weather.dateLabel != "今日")
    .map((filteredWeather) => {
      return {
        title: filteredWeather.dateLabel,
        iconUrl: filteredWeather.image.url,
        maxTemperature: filteredWeather.temperature.max.celsius,
        minTemperature: filteredWeather.temperature.min.celsius,
      };
    });

  const todayWeatherForecast = weatherData.forecasts[0];
  const todayWeatherHighlights = [
    { title: "風の強さ", value: todayWeatherForecast.detail.wind },
    { title: "波の高さ", value: todayWeatherForecast.detail.wave },
  ];

  useEffect(() => {
    const getWeather = async () => {
      const response = await axios.get(
        "https://weather.tsukumijima.net/api/forecast/city/130010"
      );
      setWeatherData(response.data);
    };
    getWeather();
  }, []);

  return (
    <div className="flex">
      <div className="w-1/3 h-screen">
        <LeftScreen
          image={todayWeatherForecast.image.url}
          telop={todayWeatherForecast.telop}
          temperature={todayWeatherForecast.temperature.max.celsius || ""}
          day={weatherData.publicTimeFormatted}
          area={weatherData.location.prefecture}
        />
      </div>
      <div className="w-2/3 h-screen bg-sky-700">
        <RightScreen
          weeklyWeather={weathersAfterTomorrow}
          todayWeatherHighlight={todayWeatherHighlights}
        />
      </div>
    </div>
  );
};
