import {Component} from 'react'
// import formatDistanceToNow from 'date-fns'
import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    comment: '',
  }

  deleteComment = id => {
    const {commentsList} = this.state
    const filteredList = commentsList.filter(each => each.id !== id)
    this.setState({
      commentsList: filteredList,
    })
  }

  toggleLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onChangeSearchInput = event => {
    this.setState({name: event.target.value})
  }

  onCommentChange = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {name, comment, commentsList} = this.state
    // console.log(commentsList)
    return (
      <div className="bg-container">
        <div className="input-section">
          <div className="comment-name">
            <h1>Comments</h1>
            <form
              name="Comment"
              className="form-elements"
              onSubmit={this.onAddComment}
            >
              <p>Say something about 4.O Technologies</p>
              <input
                type="text"
                value={name}
                className="input"
                placeholder="Your Name"
                onChange={this.onChangeSearchInput}
              />
              <textarea
                value={comment}
                className="textarea"
                rows="6"
                placeholder="Your Comment"
                onChange={this.onCommentChange}
              />
              <button className="submit-btn" type="submit">
                Add Comment
              </button>
            </form>
          </div>
          <div className="image">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <hr className="separator" />
        <div className="comment-section">
          <p>
            <span className="comment-count">{commentsList.length}</span>{' '}
            comments
          </p>
          <ul>
            {commentsList.map(eachComment => (
              <CommentItem
                details={eachComment}
                key={eachComment.id}
                toggleLike={this.toggleLike}
                deleteComment={this.deleteComment}
                // color={
                //   initialContainerBackgroundClassNames[
                //     Math.ceil(
                //       Math.random() *
                //         initialContainerBackgroundClassNames.length,
                //     )
                //   ]
                // }
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
