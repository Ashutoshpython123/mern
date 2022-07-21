import { USER_TYPES } from "../actions/userAction";

const initialState = {
	loading: false,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case USER_TYPES.GET_USER:
			return action.payload;

		default:
			return state;
	}
};

export default userReducer;