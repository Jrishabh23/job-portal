import { put, takeLatest } from "@redux-saga/core/effects";
import { getApplicant } from "../../Utilities/Network/route";
import {
    getDetails,
    getDetailsFailedAction,
    getDetailsSuccessAction,
    GET_DETAILS,
} from "./action";

function* getParticipantList(action: any): any {
    try {
        const response = yield getApplicant();
        yield put(getDetailsSuccessAction(response));
        return;
    } catch {
        yield put(getDetailsFailedAction({}));
        return;
    }
}
function* watchList() {
    yield takeLatest(GET_DETAILS, getParticipantList);
    //action ka nam and generator function
}
export default watchList;
