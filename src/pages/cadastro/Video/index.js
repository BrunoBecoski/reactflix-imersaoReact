import React, { useEffect, useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import useForm from '../../../hooks/useForm';

import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';

import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

export default function CadastroVideo() {
  const history = useHistory();

  const [categorias, setCategorias] = useState([]);

  const categoryTitle = categorias.map(({ titulo }) => titulo);

  const { handleChange, values } = useForm({
    titulo: 'Video padrão',
    url: 'https://www.youtube.com/watch?v=jOAU81jdi-c',
    categoria: 'Front End',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        }).then(() => {
          console.log('Cadastrou com sucesso!');
          history.push('/');
        });
      }}
      >

        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria do Vídeo"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitle}
        />

        <Button type="submit">
          Cadastrar
        </Button>

      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}
