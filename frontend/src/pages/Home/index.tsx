import Button from "@components/Button";
import Container from "@components/Container";
import Title from "@components/Title";
import { ArrowUpRight, BookAlert, Trophy } from "lucide-react";

export default function Home() {
    return (
        <>
            <Container>
                <div>
                    <img 
                        src="/home/BANNER-DESKTOP.png" 
                        alt="Quero ganhar meu iphone 15"
                        className="hidden rounded-2xl md:block"
                        />

                    <img 
                        src="/home/BANNER-MOBILE.png" 
                        alt="Quero ganhar meu iphone 15"
                        className="rounded-2xl md:hidden"
                        />
                </div>
            </Container>

            <Container>
                <div className="mb-6 xl:mb-10">
                    <Title heading={"h1"} className="flex flex-col gap-2 mb-4 xl:flex-row items-center justify-center">
                        <span className="font-light">Promoção</span> <span className="font-semibold">A Palavra do Dia</span>
                    </Title>
                    <p className="text-center font-light">Aqui <span className="font-bold">comentando</span>, <span className="font-bold">curtindo</span> e <span className="font-bold">compartilhando</span> a palavra do dia já vai estar concorrendo a prêmios incríveis, veja as regras abaixo.</p>
                </div>
                <div className="w-full max-w-[600px] mx-auto mb-6 xl:mb-10 bg-surface py-6 px-4 rounded-2xl xl:py-10 xl:px-8">
                    <Title heading="h2" className="flex items-center justify-center gap-2 mb-4"><BookAlert className="size-8"/>Regras & Condições</Title>
                    <p className="font-light mb-6 xl:mb-10"><span className="font-bold">Importante</span>: Não se esqueça de ler e seguir todas as regras e condições da promoção para garantir a sua participação válida. Em caso de dúvidas, estamos à disposição para ajudar!</p>
                    <ul>
                        <li> - Inscreva-se no canal do Youtube Vírginia Arruda</li>
                        <li> - Curta o vídeo da A palavra do Dia</li>
                        <li> - Compatilhe</li>
                        <li> - Comente com seu nome + as hashtags: #apalavradodia #virginiaarruda</li>
                    </ul>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 sm:flex-row">
                    <Button className="w-full sm:w-auto"> Quero participar <ArrowUpRight className="size-5" /></Button>
                    <Button className="w-full sm:w-auto"> Ver classificação <Trophy className="size-4" /></Button>
                </div>
            </Container>
        </>
    )
}