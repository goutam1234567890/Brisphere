import {Component} from 'react'
import CommentItem from '../CommentItem'
import './index.css'

class Discover extends Component {
    state={commentsList: []}

    componentDidMount() {
        this.getcomments()
    }

    getcomments = async () => {
        const apiUrl="https://jsonplaceholder.typicode.com/comments?_limit=9"
        const options ={
            headers: {
                'content-type' : 'application/json',
            },
            method: 'GET',
        }
        const response = await fetch(apiUrl, options)
        if(response.ok) {
            const fetechedData = await response.json()
            this.setState({commentsList: fetechedData})
        }
    }
    render() {
        const {commentsList} = this.state
        return(
            <>
            <div id="mango">
                <h1 className='head'>Discover</h1>
                <ul className='unorderlist'>{commentsList.map(comment => (
                    <CommentItem commentdata={comment} key={comment.id} />
                ))}</ul>
                </div>
            </>
        )
    }
}
export default Discover
