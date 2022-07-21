import { postDataAPI, getAPI } from "../../utils/API";

export const USER_TYPES = {
	LOADING: "LOADING",
	GET_USER: "GET_USER"
};

export const getUser = () => async (dispatch) => {
	try {
		const res = await getAPI(`/user/list`);
		dispatch({
			type: USER_TYPES.GET_USER,
			payload: {
				data : res.data.data
			},
		});

	} catch (err) {
		console.log(err)
	}
};
