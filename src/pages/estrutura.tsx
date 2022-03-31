import React from "react";
import Head from "next/head";

import { Agende } from "../components/Agende";

import { PageContainer } from "../styles/global";
import { ListContainer, ListItem } from "../styles/Estrutura";

/**
 * Estrutura Page
 * @return {JSX.Element}
 */

export default function Estrutura(): JSX.Element {
  const listItems = [
    {
      img: "ico-estacionamento.png",
      label: "AMPLO ESTACIONAMENTO",
    },
    {
      img: "ico-saladeproducao.png",
      label: "SALA DE PRODUÇÃO",
    },
    {
      img: "ico-arcondicionado.png",
      label: "AR CONDICIONADO",
    },
    {
      img: "ico-acessibilidade.png",
      label: "ACESSIBILIDADE EM TODAS AS ÁREAS",
    },
    {
      img: "ico-vestiariostaff.png",
      label: "VESTIÁRIO PARA STAFF",
    },
    {
      img: "ico-gerador.png",
      label: "GERADOR",
    },
    {
      img: "ico-salavip.png",
      label: "Sala vip/camarim",
    },
    {
      img: "ico-cozinha.png",
      label: "COZINHA EQUIPADA",
    },
    {
      img: "ico-agua.png",
      label: "ÁGUA DE RE-USO PARA REGA DOS JARDINS E LIMPEZA",
    },
    {
      img: "ico-pet.png",
      label: "PET FRIENDLY",
    },
    {
      img: "ico-chapelaria.png",
      label: "chapelaria",
    },
  ];

  return (
    <PageContainer>
      <Head>
        <title>Estrutura | Vila Tremani</title>
      </Head>
      <img src="/images/img05.png" alt="" className="banner" />
      <h1>Estrutura</h1>
      <p style={{ marginBottom: "1.5rem" }}>
        Construído no alto de um vale, em um terreno de mais de 10 mil metros
        quadrados, o Vila Tremani é um espaço de eventos que foi cuidadosamente
        projetado para oferecer uma experiência única e exclusiva. Conta com
        vários ambientes integrados oferecendo grande flexibilidade na hora de
        planejar seu evento.
      </p>
      <p style={{ marginBottom: "2.5rem" }}>
        • Amplo Foyer
        <br />
        • Salão Principal com pé direito de 6 metros
        <br />
        • Varanda com 12 metros de vão livre integrada ao gramado
        <br />• Ampla área externa
      </p>
      <ListContainer>
        {listItems?.map((item) => {
          return (
            <ListItem key={item.label}>
              <img src={`/images/${item.img}`} alt={item.label} />
              <p>{item.label}</p>
            </ListItem>
          );
        })}
      </ListContainer>
      <Agende />
    </PageContainer>
  );
}
