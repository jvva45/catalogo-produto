import { useState } from 'react';
import style from './Filtros.module.css';
import type { Categoria } from '../Tipos/Categoria';
import { CiFilter } from "react-icons/ci";
interface FiltroProps {
  itensCategoria: Categoria[]; // Categoria agora deve ter pelo menos { nome: string }
  onCategoriaChange?: (categoriaNome: string | null) => void;
  onPrecoChange?: (preco: number) => void;
}

export default function Filtros({ itensCategoria, onCategoriaChange, onPrecoChange }: FiltroProps) {
  // Agora categoriaSelecionada é string | null
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string | null>(null);
  const [precoMaximo, setPrecoMaximo] = useState<number>(500);

  // Função de clique na categoria
  const handleCategoriaClick = (categoriaNome: string) => {
    // Alterna a seleção: se já está selecionada, desmarca
    const novaCategoria = categoriaSelecionada === categoriaNome ? null : categoriaNome;
    setCategoriaSelecionada(novaCategoria);

    // Chama callback para o componente pai
    if (onCategoriaChange) {
      onCategoriaChange(novaCategoria);
    }
  };

  // Função de mudança de preço
  const handlePrecoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const novoPreco = parseInt(event.target.value);
    setPrecoMaximo(novoPreco);

    if (onPrecoChange) {
      onPrecoChange(novoPreco);
    }
  };

  return (
    <>

      <section>
        <h1>Filtros <span><CiFilter />
        </span> </h1>
        {/* Seção de categorias */}

        <div className={style.categoria}>

          <p> Categoria</p>

          <div>
            {itensCategoria.map((categoria) => (
              <button
                key={categoria.nome} // agora usamos string como key
                className={categoriaSelecionada === categoria.nome ? style.active : ''}
                onClick={() => handleCategoriaClick(categoria.nome)}
              >
                {categoria.nome}
              </button>
            ))}
          </div>
        </div>

        {/* Seção de preço */}
        <div>
          <h2>Preço</h2>
          <div className={style.price}>
            <span>R$ 0</span>
            <input
              type="range"
              min="0"
              max="1000"
              value={precoMaximo}
              className={style.range}
              onChange={handlePrecoChange}
            />
            <span>R$ {precoMaximo}</span>
          </div>
          <p
            style={{
              textAlign: 'center',
              marginTop: '10px',
              fontSize: '0.9em',
              color: '#666',
            }}
          >
            Produtos até R$ {precoMaximo}
          </p>
        </div>
      </section>
    </>
  );
}
