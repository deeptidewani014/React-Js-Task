const initialState = {
  isOpen: false,
};

const sidepanelReducers = (state = initialState, action) => {
  switch (action.type) {
    case "toggleSidePanel":
      return {
        ...state,
        isOpen: !state.isOpen,
      };

    default:
      return state;
  }
};

export default sidepanelReducers;
