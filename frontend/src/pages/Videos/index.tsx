import useFetch from "@hooks/useFecth";
import CardVideo from "@components/CardVideo";
import Container from "@components/Container";
import Title from "@components/Title";
import { Clapperboard } from "lucide-react";
import type { VideoSchema } from "@schemas/video";
import Loader from "@components/Loader";

export default function Videos() {
    const { data, error, isLoading } = useFetch<VideoSchema[]>({ url: "/video" });

    if(isLoading) return <Loader />;

    if(error) return <p>Error...</p>;

    return (
        <>
            <Container>
                <div className="mb-6 xl:mb-10">
                    <div className="flex items-baseline gap-2">
                        <Clapperboard className="size-8 stroke-1 md:size-12" />
                        <Title heading="h1" className="mb-4">Videos do mês</Title>
                    </div>
                    <p className="font-light">Precisa <span className="font-bold underline">comentar</span>, <span className="font-bold underline">compartilhar</span> e dar <span className="font-bold underline">like</span> em todos os vídeos!</p>
                </div>

                <div className="flex flex-col gap-10">
                    {!!data?.filter((video: VideoSchema) => video.week === 4).length && (
                        <div>
                            <Title heading="h2" className="mb-6 text-center"> Última semana </Title>

                            <div className="grid grid-cols-1 grid-rows-1 gap-y-6 gap-x-4 md:grid-cols-3 md:gap-x-6 md:gap-y-10">
                                {data?.filter(video => video.origin === "VA" && video.week === 4).map((video) => (
                                    <CardVideo key={video.id} data={video} />
                                ))}
                            </div>
                        </div>
                    )}

                    {!!data?.filter((video: VideoSchema) => video.week === 3).length && (
                        <div>
                            <Title heading="h2" className="mb-6 text-center"> Terceira semana </Title>

                            <div className="grid grid-cols-1 grid-rows-1 gap-y-6 gap-x-4 md:grid-cols-3 md:gap-x-6  md:gap-y-10">
                                {data?.filter(video => video.origin === "VA" && video.week === 3).map((video) => (
                                    <CardVideo key={video.id} data={video} />
                                ))}
                            </div>
                        </div>
                    )}

                    {!!data?.filter((video: VideoSchema) => video.week === 2).length && (
                        <div>
                            <Title heading="h2" className="mb-6 text-center"> Segunda semana </Title>

                            <div className="grid grid-cols-1 grid-rows-1 gap-y-6 gap-x-4 md:grid-cols-3 md:gap-x-6  md:gap-y-10">
                                {data?.filter(video => video.origin === "VA" && video.week === 2).map((video) => (
                                    <CardVideo key={video.id} data={video} />
                                ))}
                            </div>
                        </div>
                    )}

                    {!!data?.filter((video: VideoSchema) => video.week === 1).length && (
                        <div>
                            <Title heading="h2" className="mb-6 text-center"> Primeira semana </Title>

                            <div className="grid grid-cols-1 grid-rows-1 gap-y-6 gap-x-4 md:grid-cols-3 md:gap-x-10 md:gap-y-14">
                                {data?.filter(video => video.origin === "VA" && video.week === 1).map((video) => (
                                    <CardVideo key={video.id} data={video} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </Container>
        </>
    )
}