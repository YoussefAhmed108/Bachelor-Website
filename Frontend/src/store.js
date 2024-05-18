import { configureStore } from "@reduxjs/toolkit";
import metricReducer from './metricsSlice'


export const store = configureStore({
    reducer: {
        metrics: metricReducer
    },
    devTools: true
})