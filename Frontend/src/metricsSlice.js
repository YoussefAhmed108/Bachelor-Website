import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

function getMinuteDifference(date1, date2) {
    // Ensure both dates are Date objects
    date1 = date1 instanceof Date ? date1 : new Date(date1);
    date2 = date2 instanceof Date ? date2 : new Date(date2);

    // Get the difference in milliseconds
    const differenceInMs = date2.getTime() - date1.getTime();

    // Convert milliseconds to minutes (divide by 1000 milliseconds per minute and round down)
    const differenceInMinutes = Math.floor(differenceInMs / (1000 * 60));

    return differenceInMinutes;
}

const journeys = [{ journey: 'Change password', total_actions: 4 },
{ journey: 'Book a doctor', total_actions: 6 },
{ journey: 'Buy a Medicine', total_actions: 6 },
{ journey: 'Cancel appointment', total_actions: 6 },
{ journey: 'Reschedule appointment', total_actions: 6 },
{ journey: 'Request a followup', total_actions: 6 },
{ journey: 'Subscribe to a health Package', total_actions: 5 },
{ journey: 'View Prescription', total_actions: 4 },
{ journey: 'Chat with a doctor', total_actions: 3 },
{ journey: 'Add funds to wallet', total_actions: 7 }]
console.log(journeys.filter(journey => journey.journey == 'Buy a Medicine')[0])
const metricsSlice = createSlice({
    name: 'metrics',
    initialState: {
        startTime: 0,
        endTime: 0,
        elapsedTime: 0,
        pagesViewed: [],
        journey: 'Buy a Medicine',
        total_actions : 0,
        successfulActions: 0
    },
    reducers: {
        setStartTime: (state, action) => {
            console.log(action.payload)
            state.startTime = action.payload
            console.log(journeys.filter(journey => journey.journey == state.journey)[0])
            state.total_actions = journeys.filter(journey => journey.journey == state.journey)[0].total_actions
            //console.log(state.pagesViewed)

        },
        setEndTime: (state, action) => {
            console.log('here slice')
            console.log(action.payload)
            state.endTime = action.payload
            const elapsedTime = getMinuteDifference(state.startTime, state.endTime)
            state.elapsedTime = elapsedTime
            axios.post('http://localhost:4000/toCSV', { ...state }).then(response => {
                console.log('here')
            })
        },
        viewPage: (state, action) => {
            console.log(action.payload)
            const found = state.pagesViewed.includes(action.payload)
            if (!found) {
                state.pagesViewed = [...state.pagesViewed, action.payload]
            }

        },
        doneSuccessfulAction: (state, action) => {
            console.log(action.payload)
            state.successfulActions  = state.successfulActions + action.payload
        },
        setJourney: (state, action) => {
            state.journey = action.payload
        }
    }
})


export const { setStartTime, setEndTime, viewPage, doneSuccessfulAction } = metricsSlice.actions

export default metricsSlice.reducer;

export const getState = (state) => state.metrics