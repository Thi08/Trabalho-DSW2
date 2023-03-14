import React, { useEffect, useState } from "react";
import './App.css';
import API from "./Api";
import Fileiras from './Componentes/Fileiras/Fileiras.js';

export default () => {

    // Salva a lista de filmes
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        // Pega a lista completa de filmes
        const carregar = async () => {
            let list = await API.getHomeList();
            setMovieList(list);
        }

        carregar();
    }, []);

    return (
        <div className="page">
            <section className="lists">

                {/* Faz um loop para adicionar todos os filmes a tela */}
                {movieList.map((item, key) => (
                    <Fileiras key={key} title={item.title} items={item.items} id={item.id} />
                ))}
            </section>

            <footer>
                Trabalho de Desenvolvimento de Software 2
                <br></br>
                Feito por:
                <br></br>
                Bruno Luis Rodrigues Medri, 790034
                <br></br>
                Bruno Leandro Pereira, 791067
                <br></br>
                Thiago Roberto Garcia Albino, 790034
            </footer>

            {movieList.length <= 0 &&
                <div className="loading">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b6e0b072897469.5bf6e79950d23.gif" alt="Carregando" />
                </div>
            }

        </div>
    );
}

