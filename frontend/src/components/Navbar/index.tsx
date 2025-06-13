import { useState } from "react";
import { Link, useLocation } from "react-router";
import { MenuIcon, XIcon } from "lucide-react";
import Container from "@components/Container";

function Social({className}: { className: string }) {
    return (
        <div className={className}>
            <Link 
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10" 
                to="https://www.facebook.com/virginiaarrudaoficial"
                target="_blank"
            >
                <img 
                    src="/icons/facebook.svg" 
                    alt="facebook"
                    className="w-6"
                />
            </Link>
            <Link 
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10" 
                to="https://www.instagram.com/virginiaarruda"
                target="_blank"
            >
                <img 
                    src="/icons/instagram.svg" 
                    alt="instagram"
                    className="w-6"
                />
            </Link>
            <Link 
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10" 
                to="https://www.youtube.com/@VirginiaArruda"
                target="_blank"
            >
                <img 
                    src="/icons/youtube.svg" 
                    alt="youtube"
                    className="w-7"
                />
            </Link>
            <Link 
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10" 
                to="https://open.spotify.com/intl-pt/artist/5RUMApncGMcAxDhgg7akQa"
                target="_blank"
            >
                <img 
                    src="/icons/spotify.svg" 
                    alt="spotify"
                    className="w-6"
                />
            </Link>
        </div>
    )
}

export default function Navbar() {
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const items = [
        { href: "/", label: "Início" },
        { href: "/ranking", label: "Classificação" },
        { href: "/videos", label: "Vídeos" },
        { href: "/sobre", label: "Histórico" }
    ]
    return (
        <nav 
            aria-label="Menu de navegação"
            className="fixed top-0 left-0 flex items-center justify-between w-full h-20 border-b border-border bg-surface/95 backdrop-blur-sm"
        >
            <Container py="none" className="h-full grid grid-cols-[1fr_auto] items-center xl:grid-cols-[1fr_198px_1fr]">
                <div className={`
                        fixed top-20 w-full max-w-96 h-[calc(100vh-80px)] bg-surface/95 py-6 px-4 duration-300
                        xl:relative xl:top-0 xl:left-0 xl:w-auto xl:max-w-auto xl:h-full xl:p-0 xl:bg-transparent
                        ${open ? "left-0" : "-left-full" }
                `}>
                    <p className="uppercase text-xs font-light mb-4 xl:hidden">Menu</p>
                    <ul className="h-auto xl:h-full xl:flex">
                        {items.map((item) => (
                            <li className={`
                                w-full h-10 inline-block text-base font-light rounded-md mb-2 px-4 xl:mb-0 last:mb-0 hover:bg-white/20
                                ${location.pathname === item.href 
                                    ? "bg-white/20 xl:border-white"
                                    : "bg-transparent border-transparent"
                                }
                                xl:h-full xl:inline-flex xl:items-center xl:bg-transparent xl:px-4 xl:rounded-none xl:border-b xl:hover:border-white xl:hover:bg-transparent
                            `} key={item.label}>
                                <Link className="flex items-center w-full h-full" to={item.href}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                    <Social className="absolute bottom-0 left-0 flex items-center justify-center gap-6 w-full h-20 xl:hidden" />
                </div>

                <Link className="xl:flex items-center justify-center" to="/">
                    <img 
                        src="/brands/word-white.png" 
                        alt="A palavra do dia" 
                        className="w-48 xl:w-48"
                    />
                </Link>

                <Social className="hidden items-center justify-end xl:flex" />

                <button className="xl:hidden" onClick={() => setOpen(prev => !prev)}>
                    {open ? (<XIcon className="ize-10" />) : (<MenuIcon className="size-10"/>)}
                </button>
            </Container>
        </nav>
    )
}