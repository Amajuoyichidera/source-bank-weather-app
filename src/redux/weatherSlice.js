import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = '54648acc788ba77b3cfbde8f2975bb89';
  
  const initialState = {
    weather: null,
    loading: false,
    error: null,
  };

  export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (location, { rejectWithValue }) => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
        );
        return response.data;
      } catch (err) {
        return rejectWithValue('Failed to fetch weather data. Please try again.');
      }
    }
  );

  const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchWeather.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchWeather.fulfilled, (state, action) => {
          state.weather = action.payload;
          state.loading = false;
        })
        .addCase(fetchWeather.rejected, (state, action) => {
          state.error = action.payload;
          state.loading = false;
        });
    },
  });
  
  export default weatherSlice.reducer;