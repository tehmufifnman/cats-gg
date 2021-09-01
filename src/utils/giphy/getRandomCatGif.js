import getGiphyApiKey from './getGiphyApiKey';

const createGetRandomCatGif = (apiKey) =>
    () =>
        fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=muffin&rating=g`)
            .then(response => response.json())
            .then(json => json.data);

export default createGetRandomCatGif(getGiphyApiKey());
