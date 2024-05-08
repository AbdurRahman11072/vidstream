"use client"
import styles from "./UserMenuLinks.module.css"
import Link from "next/link";
import { usePathname } from "next/navigation";

const UserrMenuLinks = ({item}) => {
    const pathName=usePathname();
    return (
       <Link href={item.path} className={`${styles.container} ${pathName === item.path && styles.active}`}>
       {item.icon}
       {item.title}
       </Link>
    );
};

export default UserrMenuLinks;