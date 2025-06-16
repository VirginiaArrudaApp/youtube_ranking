import type { VideoSchema } from "@schemas/video";
import { Eye, MessagesSquare, ThumbsUp } from "lucide-react";
import { Link } from "react-router";

type CardVideoProps = {
    data: VideoSchema
}

export default function CardVideo({ data }: CardVideoProps) {
    return (
        <Link to={data.url} target="_blank" className="hover:scale-105 duration-300 border-b border-border last:border-0 pb-4 md:border-0">
            <div className="w-full h-52 rounded-2xl mb-2 overflow-hidden md:h-56 xl:h-68">
                <img 
                    src={data.thumbnail}
                    alt={data.title} 
                    className="w-full h-full object-cover object-center"
                />
            </div>
            <p className="text-text font-light mb-4">{data.title}</p>
            <div className="flex items-center justify-center gap-6">
                <p className="flex items-center gap-1 font-light"><MessagesSquare className="size-4 stroke-1" />{data.comments}</p>
                <p className="flex items-center gap-1 font-light"><ThumbsUp className="size-4 stroke-1" />{data.likes}</p>
                <p className="flex items-center gap-1 font-light"><Eye className="size-4 stroke-1" />{data.views}</p>
            </div>
        </Link>
    )
}