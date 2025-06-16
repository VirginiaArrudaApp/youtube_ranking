import { useParams } from "react-router";
import Container from "@components/Container";
import Title from "@components/Title";

export default function User() {
    const { username } = useParams();

    return (
        <Container>
            <div className="mb-10 xl:mb-20">
                <Title heading="h1" className="mb-4">Pagina de atividade</Title>
                <p className="font-light">Aqui será possivél esta as atividades de <span className="font-bold underline">{username}</span>!</p>
            </div>

            <div>
                <p className="text-center"> Ainda estamos trabalhando para isso, em breve estará pronto para você. </p>
            </div>
        </Container>
    )
}