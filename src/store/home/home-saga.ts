import homeApi from "@/backend/home-api";
import { toaster } from "@/components/ui/toaster";
import { call, put, takeEvery } from "redux-saga/effects";
import { setError, setIsLoading } from "../loading/loading-slice";
import * as actions from './home-slice';


function* fetchHomeData() {
	yield put(setIsLoading(true));
	try {
		const homeData: actions.Home = yield call(homeApi.fetchHomeData);
		yield put(actions.setData(homeData));
	} catch (error) {
		toaster.create({ title: error as string, type: 'error' })
		yield put(setError(error));
	} finally {
		yield put(setIsLoading(false));
	}
}

function* homeSaga() {
	yield takeEvery(actions.getData.type, fetchHomeData);
}

export default homeSaga;