import React from 'react';

import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

import dates from '../../data/dados_iniciais.json';

export default function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />
      
      <BannerMain
        videoTitle={dates.categorias[0].videos[0].titulo}
        url={dates.categorias[0].videos[0].url}
        videoDescription={"Mais um champ que com certeza será o melhor boss do jogo!"}
      />

      <Carousel
        ignoreFirstVideo
        category={dates.categorias[0]}
      />

      <Carousel
        category={dates.categorias[1]}
      />

      <Carousel
        category={dates.categorias[2]}
      />      

      <Carousel
        category={dates.categorias[3]}
      />      

      <Carousel
        category={dates.categorias[4]}
      />      

      <Carousel
        category={dates.categorias[5]}
      />      

      <Footer />
    </div>
  );
}
