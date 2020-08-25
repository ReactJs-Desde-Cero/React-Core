import React from 'react'
import { connect } from 'react-redux'
import {ClockLoader} from 'react-spinners'
import { fetchPost } from '../redux/actions/postAction'

const Blog = (props) => {
  console.log(props)

  const clicks = () => {
    props.fetchPost()
  }

  return (
      <div>
          <h1>Post en Ejecucion</h1>
          <button onClick={clicks}>
              Actualizar
          </button><br />
          <br />
          {props.blog.isFetching
            ? <ClockLoader />
            : (
                <ul>
                    {props.blog.posts.map((post) => (
                        <li key={post.id}>
                            {post.title}
                        </li>
                    ))}
                </ul>
            )}
      </div>
  )
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPost: () => dispatch(fetchPost())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
