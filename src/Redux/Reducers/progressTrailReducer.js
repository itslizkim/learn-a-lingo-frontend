export default (state = [], { type, payload }) => {
    switch (type) {
      case 'SET_PROGRESSTRAIL':
        return payload;
      default:
        return state;
    }
  };