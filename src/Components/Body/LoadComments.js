import React from 'react';
import dateFormat from 'dateformat';
import Loading from './Loading';

const LoadComments = (props) => {
    if(props.commentsIsLoading){
       return <Loading/>
    }else{
        return (
            props.comments.map(comment=>{
                return(
                    <div>
                        <div key={comment.id}>
                            <h5>{comment.author}</h5>
                            <p>{comment.comment}</p>
                            <p>Rating: {comment.rating}</p>
                            <p>{dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM TT")}</p>
                        </div>
                    </div>                 
                    )
                })
        );
    }
};

export default LoadComments;