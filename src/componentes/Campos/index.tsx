import styles from './Campos.module.css';

interface HeaderProps {
  type: string;
  valor: string | number; // Pode ser tanto string quanto number
  obrigatorio: boolean;
  placeholder: string;
  label: string;
  aoAlterado: (value: string  ) => void; // Função para lidar com a mudança de valor
}

export default function Campo({
  type,
  valor,
  obrigatorio,
  placeholder,
  label,
  aoAlterado,
}: HeaderProps) {
  return (
    <div className={styles.campo}>
      <label>{label}</label>
      <input
        type={type}
        value={valor}
        onChange={(e) => aoAlterado(e.target.value)}
        required={obrigatorio}
        placeholder={placeholder}
      />
    </div>
  );
}
