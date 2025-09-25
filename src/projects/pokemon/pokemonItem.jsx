export const PokemonItem = ({ dataItem }) => {
    const { name, sprites } = dataItem;
    const { front_default } = sprites;


    return (
        <div className="text-center py-6 px-10 border-green-700 border-1 rounded-2xl shadow-green-400 shadow-2xl">
            <img src={front_default} height={150} width={150} />
            <h2 className="mt-4 text-xl">{name}</h2>
        </div>
    )
}