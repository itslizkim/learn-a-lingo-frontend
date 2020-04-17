export default (state = [], { type, payload }) => {
    switch (type) {
      case 'SET_FLASHCARDS':
        return payload;
      default:
        return state;
    }
  };