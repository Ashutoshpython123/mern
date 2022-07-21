import axios from "axios";


const baseurl = "http://localhost:8020";

export const getAPI = async (url) => {
	const res = await axios.get(`${baseurl}/api/v1/${url}`);
	return res;
};


export const postDataAPI = async (url, post) => {
	const res = await axios.post(`${baseurl}/api/v1/${url}`, post);
	return res;
};

