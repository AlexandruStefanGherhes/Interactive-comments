import axios from 'axios';

export const UpdateVote = ({id,logic,comments,setComments,sign}) =>{

    const update = (id,increment) =>{
        const post = comments.find(c => c.id == id)
        const newLikes = increment ? post.likes + 1 : post.likes -1
        const changedPost = {...post, likes:newLikes}
    
        axios.put(`http://localhost:8000/comments/${id}`,changedPost).then(response=>{
            setComments(comments.map(n=>n.id !== id ? n : response.data))
        })
    }

    return(
        <button onClick={()=>update(id,logic)}>{sign}</button>
    )
    }

export const UpdateReply = ({id,commentId,logic,reply,comments,setComments,sign}) =>{
    // console.log(reply);
    const update = (id,increment) =>{
        const post = reply.replies.find(n=>n.id == id)
        const newLikes = increment ? post.likes + 1 : post.likes -1
        const changedPost = {...post, likes:newLikes}
        console.log(changedPost)    
        // axios.put(`http://localhost:8000/comments/${id}`,changedPost).then(response=>{
        //     setComments(comments.map(n=>n.id !== id ? n : response.data))
        // })
    }

    return(
        <button onClick={()=>update(id,logic)}>{sign}</button>
    )
    }


