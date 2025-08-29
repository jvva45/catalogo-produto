import { useEffect, useState } from 'react';
import type { Produto } from '../../Tipos/Produto';
import Catalogo from '../../Catalogo';
import ProdutoCard from '../../ProdutoCard';
import Styles from './Home.module.css'

import type { Categoria } from '../../Tipos/Categoria';
import Filtros from '../../Filtros';
import Rodape from '../../Rodape';


interface HomeProps {
  busca: string;
}

export default function Home({ busca }: HomeProps) {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  
  const [produtosOriginais, setProdutosOriginais] = useState<Produto[]>([]);
  const [categoriaFiltro, setCategoriaFiltro] = useState<string | null>(null);
  const [precoFiltro, setPrecoFiltro] = useState<number | null>(null);
  const [tema, setTema] = useState<'light' | 'dark'>('light');
  const categorias: Categoria[] = [
    { id: 1, nome: "Vestuário" },
    { id: 2, nome: "Calçados" },
    { id: 3, nome: "Eletrônicos" },
    { id: 4, nome: "Acessórios" },
    { id: 5, nome: "Eletrodomésticos" },
  ];

  // Carregar os dados de produtos
  useEffect(() => {
    fetch('../../dados.json')
      .then(res => res.json())
      .then(data => {
        setProdutosOriginais(data);
        setProdutos(data);
      });
  }, []);


  // Função para filtrar os produtos com base nos filtros ativos
  useEffect(() => {
    let produtosFiltrados = [...produtosOriginais];

    // Filtro por nome (busca)
    if (busca) {
      produtosFiltrados = produtosFiltrados.filter(produto =>
        produto.nome.toLowerCase().includes(busca.toLowerCase())
      );
    }

    // Filtro por categoria
    if (categoriaFiltro) {
      produtosFiltrados = produtosFiltrados.filter(produto =>
        produto.categoria === categoriaFiltro
      );
    }

    // Filtro por preço
    if (precoFiltro !== null) {
      produtosFiltrados = produtosFiltrados.filter(produto =>
        produto.preco <= precoFiltro
      );
    }

    // Atualiza os produtos filtrados no estado
    setProdutos(produtosFiltrados);
  }, [busca, categoriaFiltro, precoFiltro, produtosOriginais]);



  // Função para adicionar um novo produto (como você já tinha implementado)
  function aoAdicionarProduto(novoProduto: Produto) {
    setProdutos([...produtos, novoProduto]);
    console.log(produtos);
  }

  // Função para alterar o filtro de categoria
  function FiltrarCategoria(categoriaNome: string | null) {
    setCategoriaFiltro(categoriaNome);
  }

  // Função para alterar o filtro de preço
  function FiltrarPreco(preco: number | null) {
    setPrecoFiltro(preco);
  }


  return (
    <>
    <section className={Styles.container}>
      <div className={Styles.formularioWrapper}>
        <Filtros
          itensCategoria={categorias}
          onCategoriaChange={FiltrarCategoria}
          onPrecoChange={FiltrarPreco}
        />
      </div>

      <div className={Styles.catalogoWrapper}>
      

        <div className={Styles.produtos}>
          {produtos.map((produto) => (
            <ProdutoCard key={produto.id} produto={produto} />
          ))}
        </div>

      
      </div>
      
    </section>
      <Rodape/>
      </>
  );
}
