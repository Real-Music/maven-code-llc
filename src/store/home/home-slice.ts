import { Activities, GroupTrend, IncomeTrend, KPI } from "@/data/home-data";
import { createSlice } from "@reduxjs/toolkit";

export interface Home {
	kpi: KPI[];
	activities: Activities;
	incomeTrend: IncomeTrend;
	groupTrend: GroupTrend;
}

const initialState: Home = {
	kpi: [],
	activities: { trend: {}, purchases: [] },
	incomeTrend: { profit: 0, revenue: 0 },
	groupTrend: {}
};

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
			state.kpi = [];
			state.groupTrend = {}
			state.incomeTrend = { profit: 0, revenue: 0 }
			state.activities = { trend: {}, purchases: [] };
		}
	},
});

export const { getData, setData, resetData } = homeSlice.actions;
export default homeSlice.reducer;
