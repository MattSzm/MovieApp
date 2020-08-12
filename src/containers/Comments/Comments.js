import React, {Component, Fragment} from "react";
import Comment from "../../components/Comment/Comment";
import classes from './Comments.module.css';
import CommentInput from "../../components/Comment/CommentInput/CommentInput";
import Button from '../../components/UI/Buttons/ButtonSpecial';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions/comments';


class Comments extends Component{
    state = {
        value: '',
        restrictions: {
            maxLength: 256,
            minLength: 1
        },
        buttonActive: false
    }

    onChange = (event) => {
        const updatedValue = event.target.value;
        if (event.target.value.length < this.state.restrictions.maxLength) {
            this.setState({value: updatedValue});
        }
        if(event.target.value.length >= this.state.restrictions.minLength &&
            event.target.value.length < this.state.restrictions.maxLength ){
            this.setState({buttonActive: true});
        }
        else{
            this.setState({buttonActive: false})
        }
    }

    sendComment = () => {

        const data = {Content: this.state.value, Author: 'guest'};
        this.props.sendNewComment(this.props.IdMovie, data)
        this.setState({value: '', buttonActive: false});
    }

    render() {
        let comments = <p>No comments</p>;
        if(this.props.comments){
            comments = Object.keys(this.props.comments).map((key) => (this.props.comments[key]));
            comments = comments.map((comment,index) => {
                return <Comment author={comment.Author}
                                key={index}>{
                    comment.Content}
                </Comment>});

        }
        if(this.props.IdMovie) {
            return (
                <Fragment>
                    <h2 className={classes.Header}>Comments section</h2>
                    <div className={classes.Comments}>
                        {comments}
                    </div>
                    <CommentInput
                        value={this.state.value}
                        onchangefunc={(event) => {
                            this.onChange(event)
                        }}/>
                    <br/>
                    <Button click={this.sendComment}
                            active={this.state.buttonActive}>
                        Comment!
                    </Button>
                </Fragment>);
        }
        else{
            return null;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments.Comments,
        loading: state.comments.loading,
        IdMovie: state.comments.IdMovie
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendNewComment: (Id, Data) => dispatch(actionTypes.sendNewComment(Id, Data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Comments);