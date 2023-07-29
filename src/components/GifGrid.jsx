import { GifIem } from "./GifIem";
import useFetchGifs from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {isLoading ? <h2>Cargando...</h2> :

                <ol>
                    {
                        images.map((img) => (
                            <GifIem
                                key={img.id}
                                // img={url}
                                // title={title}
                                {...img}
                            />
                        ))
                    }
                </ol>
            }

        </>
    )
}
