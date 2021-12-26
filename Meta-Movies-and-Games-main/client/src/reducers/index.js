import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";
import review from "./review";
import like from './like';

export default combineReducers({ alert, auth, profile, review, like });
