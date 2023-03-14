import React, { useState } from "react";
import './Fileiras.css';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { BsInfoCircle } from 'react-icons/bs';


export default ({ title, items }) => {

    const [scrollX, setScrollX] = useState(0)
    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 3);
        if (x > 0) {
            x = 0;
        }
        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 3);
        let listW = (items.results.length * 150) + Math.round(window.innerWidth / 8);
        if (x < ((window.innerWidth) - listW)) {
            x = 0;
        }
        setScrollX(x);
    };

    return (

        <div className='fileiras'>
            <h2>{title}</h2>
                <div className='scroll-esquerda' onClick={handleLeftArrow}>
                    <IoIosArrowDropleftCircle style={{ fontSize: 50 }} />
                </div>

                <div className='scroll-direita' onClick={handleRightArrow}>
                    <IoIosArrowDroprightCircle style={{ fontSize: 50 }} />
                </div>

            {/* Area total dos filmes */}
            <div className="area-fileiras">

                {/* Area que faz scroll nos filmes */}
                <div className="lista-fileiras"
                    style={{
                        marginLeft: scrollX,
                        width: items.results.length * 150
                    }}
                >
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="item-fileiras">
                            <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt={item.original_title} />
                            <div className="nome-item-fileiras">{item.title}</div>
                            <button href={`/descricao/${item.overview}`} className="overview-fileiras"><BsInfoCircle style={{ fontSize: 30 }} /></button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

