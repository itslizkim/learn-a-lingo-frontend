let initialState = {
    all: []
  }

  let languageReducer = (state = initialState, action) => {
    switch (action.type) {
  
      case "SET_LANGUAGES":
        return {
          ...state,
          all: action.payload
        }
      default:
        return state
    }
  }
  
  export default languageReducer