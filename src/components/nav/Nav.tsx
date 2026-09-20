'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { MdMenu, MdOutlineOpenInNew } from "react-icons/md"

export const Nav = () => {
    const currentPath = usePathname();
    const [pageTitle, setPageTitle] = useState("Codarse");
    const [drawer, setDrawer] = useState(false);

    useEffect(() => {
        const handleTitleUpdate = () => {
            setPageTitle(document.title);
            setDrawer(false);
        };

        const timeoutId = setTimeout(handleTitleUpdate, 50);

        return () => clearTimeout(timeoutId);
    }, [currentPath]);

    return (
        <nav className="flex items-center gap-6 justify-left md:justify-center bg-primary py-2 sm:py-4 px-4">
            <button className="sm:hidden" onClick={() => setDrawer(true)}>
                <MdMenu size={24} />
            </button>

            <ul className="flex items-center justify-center gap-4 py-2" tabIndex={drawer ? -1 : undefined}>
                <li>
                    <Link href={"/"} className="border-2 p-2 uppercase font-bold">
                        Codarse
                    </Link>
                </li>
                <li className="hidden sm:block">
                    <Link href={"/"} data-active={currentPath === "/"} className="data-[active=true]:underline">Home</Link>
                </li>
                <li className="hidden sm:block">
                    <Link href={"/cursos"} data-active={currentPath === "/cursos"} className="data-[active=true]:underline">Cursos</Link>
                </li>
                <li className="hidden sm:block">
                    <Link href={"https:google.com"} target="_blank" className="flex items-center justify-center gap-1">
                        Externo
                        <MdOutlineOpenInNew />
                    </Link>
                </li>
            </ul>

            <div tabIndex={drawer ? undefined : -1} onClick={() => setDrawer(false)} data-open={drawer} className="bg-linear-to from-background flex fixed top-0 left-0 right-0 bottom-0 transition-transform data-[open=false]:-translate-x-full">
                <ul onClick={event => event.stopPropagation()} className="h-full flex flex-col gap-4 p-4 w-60 bg-background">
                    <li className="sm:block">
                        <Link href={"/"} data-active={currentPath === "/"} className="data-[active=true]:underline">Home</Link>
                    </li>
                    <li className="sm:block">
                        <Link href={"/cursos"} data-active={currentPath === "/cursos"} className="data-[active=true]:underline">Cursos</Link>
                    </li>
                    <li className="sm:block">
                        <Link href={"https:google.com"} target="_blank" className="flex gap-1 items-center">
                            Externo
                            <MdOutlineOpenInNew />
                        </Link>
                    </li>
                </ul>
            </div>
            <h1 className="sm:hidden">
                {pageTitle}
            </h1>
        </nav>
    )
}