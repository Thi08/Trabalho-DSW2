import React, { useState } from "react";
import './Fileiras.css';
import { SlArrowLeft } from 'react-icons/sl';
import { SlArrowRight } from 'react-icons/sl';


export default ({ title, items }) => {

    const [scrollX, setScrollX] = useState(0)
    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth /2);
        if(x>0){
            x = 0;
        }
        setScrollX(x);
    }
    
    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth /2);
        let listW = items.results.length * 150;
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    }

    return (

        <div className='fileiras'>
            <h2>{title}</h2>
            <div className='scroll-esquerda' onClick={handleLeftArrow}>
                <SlArrowLeft style={{ fontSize: 50 }} />
            </div>

            <div className='scroll-direita' onClick={handleRightArrow}>
                <SlArrowRight style={{ fontSize: 50 }} />
            </div>


            {/* Area total dos filmes */}
            <div className="area-fileiras">

                {/* Area que faz scroll nos filmes */}
                <div className="lista-fileiras"
                style = {{marginLeft: scrollX,
                    width: items.results.length *150
                }}
                >
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