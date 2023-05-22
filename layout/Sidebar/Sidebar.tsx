import { SidebarProps } from "./Sidebar.props";
import styles from './Sidebar.module.css';
import cn from 'classnames';
import { Menu } from "../Menu/Menu";
import { ReactSVG as Logo } from 'react-svg';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
    return (
        <div className={ cn(className, styles.sidebar) } {...props}>
            <Logo src="../logo.svg" className={styles.logo}/>
            <div>поиск</div>
            <Menu />
        </div>
    )
}