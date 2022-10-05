import React from 'react'

// function to map api endpoints to useful news informations, to be viewed on website
function NewsArticle({data}) {
    return (
        <div className='news-div'>

            <h1 className='news-title'>{data.title}</h1>
            <p className='news-description'>{data.description}</p>
            <span className='news-source'>{data.source.name}</span>
            
        </div>
    );
}

export default NewsArticle;