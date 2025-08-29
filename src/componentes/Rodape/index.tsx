import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaTruckFast } from "react-icons/fa6";
import { LuTimerReset } from "react-icons/lu";
import { CiCreditCard1 } from "react-icons/ci";

import styles from './Rodape.module.css'

function Beneficio({ Icone, titulo, texto }: { Icone: any, titulo: string, texto: string }) {
    return (
        <div className={styles.beneficio}>
            <Icone className={styles.icone} size={50} />
            <div>
                <h2 className={styles.titulo}>{titulo}</h2>
                <p className={styles.texto}>{texto}</p>
            </div>
        </div>
    );
}

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            
            {/* Benefícios */}
            <div className={styles.beneficios}>
                <Beneficio 
                    Icone={FaTruckFast} 
                    titulo="Frete Grátis" 
                    texto="Frete Grátis para todo o Brasil" 
                />
                <Beneficio 
                    Icone={LuTimerReset} 
                    titulo="Rápida Entrega" 
                    texto="A partir de 2 dias úteis • Confira as regras" 
                />
                <Beneficio 
                    Icone={CiCreditCard1} 
                    titulo="Pagamento Facilitado" 
                    texto="Parcele suas compras no cartão" 
                />
            </div>

            {/* Links */}
            <div className={styles.linksContainer}>
                <nav className={styles.coluna}>
                    <h2 className={styles.subtitulo}>Institucional</h2>
                    <a className={styles.link} href="#">Sobre a teertS</a>
                    <a className={styles.link} href="#">Política de Privacidade</a>
                    <a className={styles.link} href="#">Termos de Uso</a>
                    <a className={styles.link} href="#">Contato</a>
                </nav>

                <nav className={styles.coluna}>
                    <h2 className={styles.subtitulo}>Ajuda</h2>
                    <a className={styles.link} href="#">Trocas e Devoluções</a>
                    <a className={styles.link} href="#">Entregas</a>
                    <a className={styles.link} href="#">Minha Conta</a>
                    <a className={styles.link} href="#">Meus Pedidos</a>
                </nav>

                <div className={styles.coluna}>
                    <h2 className={styles.subtitulo}>Central de Relacionamento</h2>
                    <a href="#" className={styles.link}>Tire Suas Dúvidas</a>
                    <div className={styles.centralVendas}>
                        <h2 className={styles.subtitulo}>Central de Vendas</h2>
                        <p className={styles.texto}>(48) 99652-6686</p>
                    </div>
                </div>

                {/* Redes sociais */}
                <div className={styles.redesSociais}>
                    <a href="https://facebook.com" aria-label="Facebook"><FaFacebookSquare className={styles.rede} size={30} /></a>
                    <a href="https://instagram.com" aria-label="Instagram"><FaInstagramSquare className={styles.rede} size={30} /></a>
                    <a href="https://twitter.com" aria-label="Twitter"><FaSquareXTwitter className={styles.rede} size={30} /></a>
                    <a href="https://youtube.com" aria-label="YouTube"><FaSquareYoutube className={styles.rede} size={30} /></a>
                </div>
            </div>

            {/* Copyright */}
            <div className={styles.copy}>
                © 2025 teertS - Todos os direitos reservados.
            </div>
        </footer>
    )
}
