// import { postCategory } from '../config';
// import * as types from '../constant/actiontype';

let initialState = {
	postsUI: {
		bb:22
	}
};

export default function (state = initialState, action) {
	const {type,postsUI} = action
	switch (type) {
		
		case 'postsui':
			return {
				...state,
				postsUI
			};
		default:
			return state;
	}
}