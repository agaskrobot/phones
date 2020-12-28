const APPEND_PHONE = 'PHONE_APPEND_PHONE';
const SELECTED_PHONE = 'PHONE_SELECTED_PHONE';
const LOAD_PHONE_LIST = 'PHONE_LOAD_PHONE_LIST';
const REPLACE_PHONE = 'PHONE_REPLACE_PHONE';
const DELETE_PHONE = 'PHONE_DELETE_PHONE';

const actions = {
  APPEND_PHONE,
  SELECTED_PHONE,
  LOAD_PHONE_LIST,
  REPLACE_PHONE,
  DELETE_PHONE,

  appendPhone: (phone) => ({ type: APPEND_PHONE, payload: { phone } }),
  selectedPhone: (phone) => ({ type: SELECTED_PHONE, payload: { phone } }),
  replacePhone: (phone) => ({ type: REPLACE_PHONE, payload: { phone } }),
  deletePhone: (phoneId) => ({ type: DELETE_PHONE, payload: { phoneId } }),
  loadTable: (phoneList) => ({ type: LOAD_PHONE_LIST, payload: { phoneList } })
};

export default actions;
