import actions from '../actions/phone';

const INITIAL_STATE = {
  items: [],
  selected: null
};

export function phone(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case actions.APPEND_PHONE: {
      return { ...state, items: [...state.items, payload.phone] };
    }
    case actions.SELECTED_PHONE: {
      if (payload.phone !== null) {
        sessionStorage.setItem('phoneId', payload.phone.id);
      } else {
        sessionStorage.removeItem('phoneId');
      }
      return { ...state, selected: payload.phone };
    }
    case actions.REPLACE_PHONE: {
      const index = state.items.findIndex((element) => element.id === payload.phone.id);
      const phone = payload.phone;
      const items = [...state.items.slice(0, index), phone, ...state.items.slice(index + 1)];
      return { ...state, items };
    }
    case actions.DELETE_PHONE: {
      const index = state.items.findIndex((element) => element.id === payload.phoneId);
      const items = [...state.items.slice(0, index), ...state.items.slice(index + 1)];
      return { ...state, items };
    }
    case actions.LOAD_PHONE_LIST: {
      return { ...state, items: payload.phoneList };
    }
    default:
      return state;
  }
}
