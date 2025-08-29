// Importação dos ícones e estilos
import { FaRegUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import styles from './Header.module.css';
import MenuLink from "../MenuLink";
import Catalogo from "../Catalogo";
import { useState } from "react";


interface HeaderProps {
  busca: string;
  setBusca: (valor: string) => void;
}
// Função do Header
export default function Header({ busca, setBusca }: HeaderProps) {
    

    return (
        <>
            <header className={styles.header}>

                {/* Coluna central */}
                <div className={styles.center}>
                    <img src="/assets/logo.png" alt="Logo" className={styles.logo} />
                    <nav>
                        <MenuLink to="/">Catálogo</MenuLink>
                        <IoMdArrowDropdown />
                    </nav>
                    <Catalogo busca={busca} setBusca={setBusca} />
                </div>

                {/* Coluna direita */}

            </header>

            {/* Linha abaixo do Header */}
            <div className={styles.line}></div>
        </>
    );
}
