import React,{ useEffect, useState } from "react";

import Moment from 'moment';
import CommentsService from "../services/CommentsService";



const Card = (props) => {
    const [add,setAdd] = useState(false);
    const [comments,setComments] = useState([]);
    const [mycomment,setMycomment] = useState('');

    Moment.locale('en');

    useEffect(()=>{
        CommentsService.getByPostId(props.id)
        .then(res=>{
            setComments(res.data);
        })

     }, []) ;

     const sendComment = ()=>{
        const obj = {
            comment:mycomment,
            author:'Anonymous',
            postId:props.id
        };
        CommentsService.create(obj).then(res=>{
            alert(res.data.message);
            window.location="/";
        })
    }

    return (
        <div className="card mb-2">
            <div className="row">
                <div className="col-sm-8 row">
                   <div className="col-sm-4 text-center">
                        <span className="material-icons avatar-icon">account_circle</span>
                   </div>
                   <div className="col-sm-8">
                        <span>{props.author}</span><br/>
                        <span>{ Moment(props.date).format('d MMM YYYY') }</span>
                   </div>
                </div>
                <div className="col-sm-4 p-2 text-right">
                    <a href={ `/editpost/${props.id}` } type="button" className="btn btn-primary btn-sm mr-2">Edit</a>
                    <button type="button" className="btn btn-danger btn-sm" >Delete</button>
                </div>
            </div>
            <h5 className="card-title p-2">{props.title}</h5>
            <p className="card-text p-2 text-justify">{props.content}</p>
            <div className="text-right p-2">
              { add===false? (
                  <button type="button" className="btn btn-success btn-sm" onClick={()=>{ setAdd(true); }} >add comment</button>
              ):(
                <button type="button" className="btn btn-danger btn-sm" onClick={()=>{ setAdd(false); }} >cancel comment</button>
              ) }
            </div>
            <div className="card">
                {add? (
                    <div className="p-2" >
                        <div className="input-group">
                            <input type="text" onChange={(event)=>setMycomment(event.target.value)} className="form-control" placeholder="Write your comments..." />
                            <div className="input-group-append" id="button-addon4">
                                <button className="btn btn-success" type="button" onClick={()=>{ sendComment(); }}>send</button>
                            </div>
                        </div>
                    </div>
                ) : ('')}
                <ul className="list-group list-group-flush">
                    { props.limitComments === true?
                        
                            comments.map((item, index) => 
                            index<3?
                            (<li className="list-group-item" key={index}>
                                                <span>{item.comment}</span><br/>
                                                <span>{item.author}</span><br/>
                                                <span>{ Moment(item.updatedAt).format('d MMM YYYY') }</span>
                                                </li>) : ('') )
                        :
                        comments.map((item, index) => 
                           (<li className="list-group-item" key={index}>
                                            <span>{item.comment}</span><br/>
                                            <span>{item.author}</span><br/>
                                            <span>{ Moment(item.updatedAt).format('d MMM YYYY') }</span>
                                            </li>) 
                        )
                    }     
                    <li className="list-group-item text-center">
                        {
                            props.limitComments===true?
                            (<a href={`/viewmore/${props.id}`} className="btn btn-info btn-sm">view more...</a>)
                            :(<a href="/" className="btn btn-primary btn-sm"> Back</a>)
                        }
                        
                    </li>
                </ul>
            </div>
            
        </div>
    );
}
  
export default Card;



