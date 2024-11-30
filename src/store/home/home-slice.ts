import homeData from "@/data/home-data";
import { createSlice } from "@reduxjs/toolkit";

export interface Home {
	kpi: typeof homeData.kpi,
	activities: typeof homeData.activities,
	incomeTrend: typeof homeData.incomeTrend,
	groupTrend: typeof homeData.groupTrend
}

const initialState: Home = homeData;

const homeSlice = createSlice({
	name: "home",
	initialState,
	reducers: {
		getData: () => { },
		setData: (state, action) => {
			state.kpi = action.payload.kpi;
			state.activities = action.payload.activities;
			state.incomeTrend = action.payload.incomeTrend;
			state.groupTrend = action.payload.groupTrend;
		},
		resetData: (state) => {
			state.kpi = homeData.kpi;
			state.activities = homeData.activities;
			state.incomeTrend = homeData.incomeTrend;
			state.groupTrend = homeData.groupTrend;
		}
	},
});

export const { getData, setData, resetData } = homeSlice.actions;
export default homeSlice.reducer;
