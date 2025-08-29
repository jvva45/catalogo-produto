import type { Produto } from '../Tipos/Produto';
import styles from './ProdutoCard.module.css';

interface ProdutoCardProps {
  produto: Produto;
}

export default function ProdutoCard({ produto }: ProdutoCardProps) {
  // calcula o valor da parcela
  const valorParcelado = produto.preco / 10;

  return (
    <div className={styles.produto}>
      <img src={produto.imagem} alt={produto.nome} />
      <h1>{produto.nome}</h1>

      <span className= {styles.precos}>
        {produto.preco.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </span>

      <span className= {styles.precos}>
        {' '}ou 10x de{' '}
        {valorParcelado.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </span>

      <p>{produto.descricao}</p>
      <button>Comprar</button>
    </div>
  );
}
