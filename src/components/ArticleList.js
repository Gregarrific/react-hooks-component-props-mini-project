import React from 'react';
import Article from './Article';

function ArticleList({posts}) {

    const Articles = posts.map(post => {
       return( <Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>)
    })
    console.log(Articles);
    return (
        <main>
            {Articles}
        </main>
    )

}

export default ArticleList