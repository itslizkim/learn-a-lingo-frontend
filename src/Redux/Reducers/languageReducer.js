export default (state = [], {type, payload}) => {
  switch (type) {
    case 'SET_LANGUAGES':
      return payload;
    default:
      return state;
  }
}