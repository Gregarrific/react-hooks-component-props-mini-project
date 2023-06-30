import React from 'react';

function Article({title, date, preview, minutes}) {
    let coffee = "";
    let bento = ""
    let readTime

    if (minutes < 30) {
        for (let i=1; i <= Math.ceil(minutes/5); i++) {
            coffee = coffee + "☕️";
        }
        readTime = coffee + " " + minutes + " min read"
    } else if (minutes > 30) {
        for (let i=1; i <= Math.ceil(minutes/10); i++) {
            bento = bento + "🍱";
        }
        readTime = bento + " " + minutes + " min read"
    } else {
        readTime = "oops"
    }
    return(
            <article>
                <h3>{title}</h3>
                <small>
                    {date ? date : "January 1, 1970"} - {readTime}
                </small>
                <p>{preview}</p>
            </article>
    )
}

export default Article;