const BASE_URL = 'http://localhost:3000/lessons'

const setLessonAction = lessons => ({
    type: 'SET_LESSONS',
    payload: lessons
})

const getLessons = () => dispatch => {
    fetch(BASE_URL)
    .then(r => r.json())
    .then(lessons => {
        dispatch(setLessonAction(lessons));
    })
};

export default {
    getLessons
};