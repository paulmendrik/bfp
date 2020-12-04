import React from 'react'
import { RichText,Date } from 'prismic-reactjs'
import {Column} from "rbx";

const Comments = ({ slice }) => (
    <div className="comments">
            <h3>Comments</h3>
        {slice.items.map((item, index) => (
            <Comment item={item} key={index} />
        ))}
    </div>
)

const Comment = ({ item }) => (
        <article className="media">
        <figure className="media-left">
        <p className="image is-64x64">
        <img src="/icon.png" width="80" height="80" />
        </p>
        </figure>
        <div className="media-content">
        <div className="content">
        <h4>{RichText.asText(item.name)}</h4>
        <p className="date">{Date(item.date).toDateString()}</p>
                <div className="comment">
                        <h4>Comment</h4>
                        {RichText.asText(item.comment)}
                </div>
                <div className="reply">
                        <h4>Reply</h4>
                        {RichText.asText(item.reply)}
                </div>
        </div>
        </div>
        </article>
)

export default Comments