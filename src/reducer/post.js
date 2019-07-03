// import { postCategory } from '../config';
// import * as types from '../constant/actiontype';

let initialState = {
	posts: {
		aa:123456
	}
};

export default function (state = initialState, action) {
	const {type,posts} = action
	switch (type) {
		
		case 'posts':
			return {
				...state,
				posts
			};
		default:
			return state;
	}
}