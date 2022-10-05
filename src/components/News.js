import React, {useContext} from 'react'
import { NewsContext } from '../NewsContext';
import NewsArticle from './NewsArticle';


function News() {

    const { data } = useContext(NewsContext);
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;


    return (

        <div>

            <div className='paper-header-div'>
                <p className='paper-header'>newsable.</p>
                <span>🇮🇳, {date}</span>
            </div>

            {data
                ?data.articles.map(news => <NewsArticle data={news} 
                    key={news.url} />) : "Loading..."
            }
            <p class="paper-footer">Thank You! Come back Tomorrowツ</p>

        </div>

    );
}

export default News;