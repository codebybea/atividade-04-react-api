"use client";

import { useEffect, useState } from "react";
import { Button, Card, CardText, Col, Row } from "react-bootstrap";
import Pagina from "@/app/components/Pagina";
import apiSeries from "@/app/apis/apiSeries";

export default function page() {
  const [filmes, setSeries] = useState([]);

  // Fazer algo quando iniciar o componente

  useEffect(() => {
    // Buscar as Series
    buscarSeries();
  }, []);

  async function buscarSeries() {
    const resultado = await apiSeries.get("/tv/popular?language=pt-BR");
    const seriesRecebidos = resultado.data.results;
    console.log(seriesRecebidos);
    setSeries(seriesRecebidos);
  }

  return (
    <Pagina titulo="Séries Populares">
      <Row md={4} className="py-5">
        {filmes.map((serie) => {
          return (
            <Col className="py-2">
              <Card style={{ height: "100%" }}>
                <Card.Img
                  src={"https://image.tmdb.org/t/p/w500/" + serie.poster_path}
                />
                <Card.Body>
                  <Card.Title className="pb-3 text-center">
                    {serie.original_name}
                  </Card.Title>
                  <CardText className="text-center">
                    <p>
                      <b>Nota:</b> {serie.vote_average} ⭐
                    </p>
                    <p>
                      <b>Lançamentos:</b> {serie.first_air_date}
                    </p>
                  </CardText>
                </Card.Body>
                <Card.Footer className="text-end">
                  <Button href={"/series/" + serie.id}>Detalhes</Button>
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Pagina>
  );
}
