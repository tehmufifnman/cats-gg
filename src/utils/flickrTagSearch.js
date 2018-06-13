import getFlickrApiKey from './getFlickrApiKey';

export default function flickrTagSearch(tag) {

    const photoUrl = (size, photo) =>
        `https://farm${photo.farm}.staticflickr.com/` +
        `${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`

    // Returs a Promise that resolves to an array of urls to images that
    // represents a (paged) result of a tag search on Flickr.
    function flickrTagSearch (tag, page) {
        const apiKey = getFlickrApiKey()
        return fetch(
            'https://api.flickr.com/services/rest/' +
            '?method=flickr.photos.search' +
            '&api_key=' + apiKey +
            '&page=' + page +
            '&tags=' + tag +
            '&format=json' +
            '&nojsoncallback=1'
        )
            .then(response => response.json())
            .then(body => body.photos.photo)
            .then(photos => photos.map(photo => ({
                square: photoUrl('q', photo),
                medium: photoUrl('m', photo),
            })))
    }

    return {
        // [Symbol.asyncIterator]: async function*() {
        //     let pageIndex = 1
        //     while(true) {
        //         const pageData = await flickrTagSearch(tag, pageIndex)
        //         for (const photo of pageData) {
        //             yield photo
        //         }
        //         pageIndex = pageIndex + 1
        //     }
        // }
    }
}
