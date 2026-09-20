'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MdOutlineOpenInNew } from "react-icons/md"


export const Nav = () => {
    const currentPath = usePathname();

    

    return (
        <nav className="flex items-center justify-center bg-primary py-4">
            <ul className="flex items-center justify-center gap-4 py-2">
                <li>
                    <Link href={"/"} className="border-2 p-2 uppercase font-bold">
                        Codarse
                    </Link>
                </li>
                <li>
                    <Link href={"/"} data-active={currentPath === "/"} className="data-[active=true]:underline">Home</Link>
                </li>
                <li>
                    <Link href={"/cursos"} data-active={currentPath === "/cursos"} className="data-[active=true]:underline">Cursos</Link>
                </li>
                <li>
                    <Link href={"https:google.com"} target="_blank" className="flex items-center justify-center gap-1">
                    Externo
                    <MdOutlineOpenInNew />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}