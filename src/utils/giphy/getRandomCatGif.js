import getGiphyApiKey from './getGiphyApiKey';

const createGetRandomCatGif = (apiKey) =>
    () =>
        fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=muffin muffins breakfast food bluey&rating=pg`)
            .then(response => response.json())
            .then(json => json.data)
            .then(data => data.images.original.url)
            .catch((e) => console.log('createGetRandomCatGif error', e) || 'https://placekitten.com/300/500');

export default createGetRandomCatGif(getGiphyApiKey());
