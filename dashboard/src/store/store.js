import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import forgotResetPasswordReducer from "./slices/resetPasswordSlice";
import messagesReducer from "./slices/messageSlice";
import timelineReducer from "./slices/timelineSlice";
import skillReducer from "./slices/skillSlice";
import projectReducer from "./slices/projectSlice";
import softwareApplicationReducer from "./slices/softwareApplicationSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    forgotPassword: forgotResetPasswordReducer,
    messages: messagesReducer,
    timeline: timelineReducer,
    softwareApplications: softwareApplicationReducer,
    skill: skillReducer,
    project: projectReducer,
  },
});
