import { PUSH_PHOTO } from "../constants";
const initialState = {
  data: ""
};

export default function pushPhoto(state = initialState, action) {
  switch (action.type) {
    case PUSH_PHOTO:
      return {
        data: action.data
      };

    default:
      return state;
  }
}
