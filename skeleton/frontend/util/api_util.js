
const fetchAllPokemon = () => {
    return $.ajax({
        method: 'get',
        url: '/api/pokemon'
    }
)};

export default fetchAllPokemon;
