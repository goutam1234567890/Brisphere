import './index.css'

const CommentItem = props => {
    const {commentdata} = props
    const {body, email, name, id} = commentdata

    return (
        <li id={id} className='listitem'>
            <div>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
            <p>{body}</p>
        </li>
    )
}

export default CommentItem
