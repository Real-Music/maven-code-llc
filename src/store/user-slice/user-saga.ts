import { takeEvery, call, put } from "redux-saga/effects";
import * as actions from './user-slice';
import auth from "@/backend/auth";
import { setError, setIsLoading } from "../loading/loading-slice";
import { toaster } from "@/components/ui/toaster";

function* loginUser(action: ReturnType<typeof actions.loginUser>) {
	yield put(setIsLoading(true));
	try {
		const user: ReturnType<typeof auth.login> = yield call(auth.login, action.payload);
		yield put(actions.setUser(user));
	} catch (error) {
		toaster.create({ title: error as string, type: 'error' })
		yield put(setError(error))
	} finally {
		yield put(setIsLoading(false));
	}
}

function* userSaga() {
	yield takeEvery(actions.loginUser.type, loginUser);
}

export default userSaga;
