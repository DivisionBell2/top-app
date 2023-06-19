import { HeaderProps } from "./Header.props";
import styles from './Header.module.css';
import cn from 'classnames';
import { ReactSVG as Logo } from 'react-svg';
import { MenuButton } from "@/components/MenuButton/MenuButton";
import { motion } from 'framer-motion';
import { Sidebar } from "../Sidebar/Sidebar";
import { CloseButton } from "@/components/CloseButton/CloseButton";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        setIsOpened(false);
    }, [router]);

    const variants = {
        opened: {
            opacity: 1,
            x: 0,
            transition: {
                stiffness: 20
            }
        },
        closed: {
            opacity: 0,
            x: '100%',
        }
    };

    return (
        <header className={cn(className, styles.header)} {...props}>
            <Logo src='/logo.svg' />
            <MenuButton onClick={() => setIsOpened(true)} />
            <motion.div
                className={styles.mobileMenu}
                variants={variants}
                initial={'closed'}
                animate={isOpened ? 'opened' : 'closed'}
            >
                <Sidebar />
                <div className={styles.menuClose}>
                    <CloseButton onClick={() => setIsOpened(false)} />
                </div>
            </motion.div>
        </header>
    )
}