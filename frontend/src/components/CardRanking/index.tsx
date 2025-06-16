import Title from "@components/Title"
import type { RankingSchema } from "@schemas/ranking"
import { Flame } from "lucide-react"
import { Link } from "react-router";

type CardRankingProps = {
    data: RankingSchema
}

export default function CardRanking({ data }: CardRankingProps) {
    return(
        <Link to={`/participante/${data.username}`} className="w-full h-auto border-b border-white/10 pb-4 duration-300 hover:scale-105 last:border-0 md:pb-10">
            <div className="w-full h-auto flex items-center gap-4 mb-6">
                <div className="w-26 h-26 rounded-2xl overflow-hidden">
                    <img 
                        src={data.photo} 
                        alt={data.username} 
                        className="w-full h-full object-cover object-center"
                    />
                </div>
                <div className="grow">
                    <Title heading="h4" className="text-text text-right font-bold mb-2">{data.position}° Lugar</Title>
                    <p className="text-text text-right font-light text-sm md:text-base mb-2">{data.username}</p>
                    <p className="text-text text-right font-light text-base md:text-xl">{data.comments} Comentários</p>
                </div>
            </div>
            <div className="mb-10">
                <div className="flex items-baseline justify-center gap-2 mb-4 md:mb-8">
                    <p className="text-xl font-semibold md:text-3xl">Comentários por semana</p>
                    <Flame className="size-6" />
                </div>
                <div className="grid grid-cols-4">
                    <div className="flex flex-col items-center justify-center gap-1 md:gap-2">
                            <p className="text-2xl">1°</p>
                            {data.first_week ? data.first_week : "-"}
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1 md:gap-2">
                            <p className="text-2xl">2°</p>
                            {data.second_week ? data.second_week : "-"}
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1 md:gap-2">
                            <p className="text-2xl">3°</p>
                            {data.third_week ? data.third_week : "-"}
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1 md:gap-2">
                            <p className="text-2xl">4°</p>
                            {data.fourth_week ? data.fourth_week : "-"}
                    </div>
                </div>
            </div>
            <div>
                <button className="w-full text-center font-light underline"> Ver atividade </button>
            </div>
        </Link>
    )
}