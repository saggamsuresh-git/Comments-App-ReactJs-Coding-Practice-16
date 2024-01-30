// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {details, toggleLike, deleteComment} = props
  const {name, comment, id, isLiked, initialClassName} = details
  //   console.log(color)
  const changeLike = () => {
    toggleLike(id)
  }

  const onDelete = () => {
    deleteComment(id)
  }

  const liked =
    'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
  const notLiked =
    'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const likedImage = isLiked ? liked : notLiked
  const likedColor = isLiked ? 'color' : ''
  return (
    <li>
      <div className="profile-pic-container">
        <div id="profile-pic" className={initialClassName}>
          {name[0].toUpperCase()}
        </div>
        <p className="name">{name}</p>
        <p className="time-stamp">{formatDistanceToNow(new Date())}</p>
      </div>
      <p className="comment">{comment}</p>
      <div className="buttons-container">
        <div className="like-btn-container">
          <button type="button" id="likeImage" onClick={changeLike}>
            <img src={likedImage} alt="like" />
          </button>
          <label className={likedColor} htmlFor="likeImage">
            Like
          </label>
        </div>
        <button
          onClick={onDelete}
          type="button"
          data-testid="delete"
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
