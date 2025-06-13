import Container from "@components/Container";

export default function Footer() {
    return (
        <footer className="w-full h-auto bg-surface">
            <Container py="none" className="flex items-center justify-center h-10">
                <small className="text-[10px] text-white uppercase">© 2025 Vírginia Arruda - VA Group. Todos os direitos reservados.</small>
            </Container>
        </footer>
    )
}