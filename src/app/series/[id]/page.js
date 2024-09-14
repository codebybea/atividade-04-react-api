"use client";

import { useEffect, useState } from "react";
import { CardImg, Col, Row } from "react-bootstrap";
import apiFilmes from "../../apis/apiSeries";
import Pagina from "../../components/Pagina";

export default function page(props) {
  const [filme, setFilme] = useState({});

  useEffect(() => {
    buscarFilme();
  }, []);

  async function buscarFilme() {
    const resultado = await apiFilmes.get(
      "/tv/" + props.params.id + "?language=pt-BR"
    );
    const filmeRecebido = resultado.data;
    console.log(resultado.data);
    setFilme(filmeRecebido);
  }

  return (
    <Pagina titulo={filme.name}>
      {filme.id && (
        <Row className="pt-5">
          {/* Imagem do Filme */}
          <Col md={3}>
            <CardImg
              src={"https://image.tmdb.org/t/p/w500/" + filme.poster_path}
            />
          </Col>

          {/* Detalhes do Filme */}
          <Col md={9}>
            <p>
              <b>Data de Lançamento:</b> {filme.first_air_date}
            </p>
            <p>
              <b>Temporadas:</b> {filme.number_of_seasons}
            </p>
            <p>
              <b>Epsódios:</b> {filme.number_of_episodes}
            </p>
            <p>
              <b>Nota: </b>
              {filme.vote_average} ⭐
            </p>
            <p>
              <b>Sinopse:</b> {filme.overview}
            </p>
            <p>
              <b>Generos:</b>
            </p>
            <ul>
              {filme.genres.map((item) => {
                return <li>{item.name}</li>;
              })}
            </ul>
          </Col>
        </Row>
      )}
    </Pagina>
  );
}
