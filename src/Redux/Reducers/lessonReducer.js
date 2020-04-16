let initialState = {
    all: []
  }

  let lessonReducer = (state = initialState, action) => {
    switch (action.type) {
  
      case "SET_LESSONS":
        return {
          ...state,
          all: action.payload
        }
      default:
        return state
    }
  }
  
  export default lessonReducer