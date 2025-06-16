import Container from "@components/Container";
import Title from "@components/Title";
import { Sparkles } from "lucide-react";

export default function History() {
    return (
        <>
            <Container>
                <div className="mb-6 xl:mb-10">
                    <div className="flex items-baseline gap-2">
                        <Sparkles className="size-8 stroke-1 md:size-12" />
                        <Title heading="h1" className="mb-4"> Nossos vencedores</Title>
                    </div>
                    <p className="font-light">Aqui está o nosso histórico de vencedores. Inspire-se neles e não fique de fora — você pode ser o próximo campeão!</p>
                </div>
                <div>
                    <p className="text-center"> Ainda estamos trabalhando para isso, em breve estará pronto para você. </p>
                </div>
            </Container>
        </>
    )
}