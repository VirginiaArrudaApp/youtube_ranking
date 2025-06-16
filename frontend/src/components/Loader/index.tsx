export default function Loader() {
    return (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-screen bg-accent/10 backdrop-blur-sm">
            <div className="perspective w-64 h-64">
                <img className="w-full h-full object-cover animate-spin-3d" src="/loader.png" alt="A palavra do dia" />
            </div>
        </div>
    )
}