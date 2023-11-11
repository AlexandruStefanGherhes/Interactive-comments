import { useState,useEffect } from "react";
import axios from "axios";

const useFetch = (url) =>{
    const [comments,setComments] = useState([]);
    useEffect(()=>{
        axios.get(url).then(response=>{
        setComments(response.data)
    })
    },[])
    return {comments,setComments}
}

export default useFetch