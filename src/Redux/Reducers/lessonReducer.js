export default (state = [], {type, payload}) => {
  switch (type) {
    case 'SET_LESSONS':
      return payload;
    default:
      return state;
  }
}