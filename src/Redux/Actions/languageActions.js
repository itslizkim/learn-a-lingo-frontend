const BASE_URL = 'http://localhost:3000/languages'

const setLanguageAction = languages => ({
    type: 'SET_LANGUAGES',
    payload: languages
})


const getLanguages = () => dispatch => {
    fetch(BASE_URL)
    .then(r => r.json())
    .then(languages => {
        dispatch(setLanguageAction(languages));
    })
}