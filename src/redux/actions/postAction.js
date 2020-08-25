export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST'
export const FETCH_POSTS_SUCESS = 'FETCH_POSTS_SUCESS'
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR'

export const fetchPost = () => (dispatch) => {
  dispatch({type: FETCH_POSTS_REQUEST})

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: FETCH_POSTS_SUCESS,
        payload: {
          posts: data
        }
      })
    })
    .catch(error => {
      dispatch({
        type: FETCH_POSTS_ERROR,
        error: error.toString()
      })
    })

}
