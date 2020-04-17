export default (state = [], { type, payload }) => {
    switch (type) {
      case 'SET_TRAIL':
        return payload;
      default:
        return state;
    }
  };