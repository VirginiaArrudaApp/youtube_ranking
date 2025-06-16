import { useEffect, useState } from "react";
import { Medal } from "lucide-react";
import type { RankingSchema } from "@schemas/ranking";
import Container from "@components/Container";
import Loader from "@components/Loader";
import Title from "@components/Title";
import useFetch from "@hooks/useFecth";
import CardRanking from "@components/CardRanking";

export default function Ranking() {
    const [input, setInput] = useState<string>("");
    const [search, setSearch] = useState<string>("");
    const { data, error, isLoading, page, prev, next, } = useFetch<RankingSchema[]>({ url: `/champions/mes/${search}` });

    useEffect(() => {
        const delay = setTimeout(() => {
            if (input.length > 3) {
                setSearch(input);
            } else {
                setSearch("");
            }
        }, 500);

        return () => clearTimeout(delay);
    }, [input]);

    if(isLoading) return <Loader />;

    if(error) return <p>Error...</p>;
    
    return (
        <>
            <Container>
                <div className="mb-10 xl:mb-20">
                    <div className="flex items-baseline gap-2">
                        <Medal className="size-8 stroke-1 md:size-12" />
                        <Title heading="h1" className="mb-4">Classificação</Title>
                    </div>
                    <p className="font-light">Acompanhe sua classificação e veja seu progresso no <span className="font-bold underline">ranking</span>!</p>
                </div>


                <div className="max-w-5xl mx-auto mb-10 xl:mb-20">
                    <div className="flex items-center justify-end mb-10">
                        <input 
                            type="text" 
                            name="search" 
                            id="search"
                            placeholder="Buscar por @ do YouTube" 
                            className="w-full h-10 text-surface bg-white/30 rounded-2xl px-4 md:max-w-96 focus:ring-0 focus:outline-0 focus:bg-white/80 placeholder:text-text/50 md:h-14"
                            onChange={(e) => setInput(e.target.value)}
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:gap-10">
                        {data?.map((user) => (
                            <CardRanking key={user.id} data={user}/>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-center gap-6">
                    <button onClick={() => prev()}> Voltar </button>
                    <p>{page}</p>
                    <button onClick={() => next()}> Próximo </button>
                </div>
            </Container>
        </>
    )
}