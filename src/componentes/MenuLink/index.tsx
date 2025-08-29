import { Link, useLocation } from 'react-router-dom';
import styles from './MenuLink.module.css';

interface MenuLinkProps {
  children: React.ReactNode;
  to: string;
}

export default function MenuLink({ children, to }: MenuLinkProps) {
  const localizacao = useLocation();

  return (
    <Link
      to={to}
      className={`${styles.link} ${localizacao.pathname === to ? styles.linkDestacado : ''}`}
    >
      {children}
    </Link>
  );
}
