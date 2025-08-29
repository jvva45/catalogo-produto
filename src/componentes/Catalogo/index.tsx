// Catalogo.tsx
import { CiSearch } from "react-icons/ci";
import styles from './Catalogo.module.css';

interface CatalogoProps {
  busca: string;
  setBusca: (valor: string) => void;
  placeholder?: string; // Adicionando uma opção de placeholder
}

export default function Catalogo({ busca, setBusca, placeholder = "Buscar produtos..." }: CatalogoProps) {
  return (
    <div className={styles.inputcontainer}>
      <CiSearch className={styles.icon} />
      <input
        type="text"
        placeholder={placeholder}
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
    </div>
  );
}
