import style from './Botao.module.css'

interface HeaderProps {
    texto: string;

}

export default function Botao({ texto }: HeaderProps) {
    return <button className={style.botao}>
        {texto}
    </button>

}