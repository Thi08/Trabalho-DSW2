import React from "react";
import './Fileiras.css';

export default ({ title, items }) => {
    return (
        <div className='fileiras'>
            <h2>{title}</h2>

            {/* Area total dos filmes */}
            <div className="area-fileiras">

                {/* Area que faz scroll nos filmes */}
                <div className="list-fileiras">
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="item-fileiras">
                            <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}