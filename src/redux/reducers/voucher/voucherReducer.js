import { types } from "../../types";

const initialState = {
  voucher: {},
  voucherLoading: false,
};

const voucherReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_VOUCHER:
      return {
        ...state,
        voucher: action.payload,
      };
    case types.VOUCHER_LOADING:
      return {
        ...state,
        voucherLoading: action.payload,
      };
    default:
      return state;
  }
};
export default voucherReducer;
