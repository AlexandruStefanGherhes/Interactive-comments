import {UpdateVote,UpdateReply} from "./updateLikes"
const Render = ({comments,setComments}) =>{
    return(
        <>
            {comments && comments.map((comment,commentId)=>(
            <>
                <div key={commentId}className="container">
                <div className="votes">
                    <UpdateVote
                    comments={comments}
                    setComments={setComments}
                    id={commentId}
                    logic={true}
                    sign={'+'}/>
                    <p>{comment.likes}</p>
                    <UpdateVote
                    comments={comments}
                    setComments={setComments}
                    id={commentId}
                    logic={false}
                    sign={'-'}/>
                </div>
                <div className='body'>
                    <div className="body-header">
                    <img src={comment.avatar} alt="avatar" />
                    <p>{comment.author}</p>
                    <p>{comment.time}</p>
                    <button>Reply</button>
                    </div>
                    <p>{comment.body} </p>
                </div>
                </div>
                <div>
                {comment.replies && comment.replies.map((reply,replyId)=>(
                    <div key={replyId}className="reply">
                    <div className="votes">
                    <UpdateReply
                    comments={comments}
                    reply={comments[commentId]}
                    setComments={setComments}
                    commentId={commentId}
                    id={replyId}
                    logic={true}
                    sign={'+'}/>
                    <p>{reply.likes}</p>
                    <UpdateReply
                    setComments={setComments}
                    id={replyId}
                    logic={false}
                    sign={'-'}/>
                    </div>
                    <div className='body'>
                    <div className="body-header">
                        <img src={reply.avatar} alt="avatar" />
                        <p>{reply.author}</p>
                        <p>{reply.time}</p>
                        <button>Reply</button>
                    </div>
                    <p>{reply.body} </p>
                    </div>
                </div>
                ))}
                </div>
            </>
        ))}
        </>
    )
}

export default Render