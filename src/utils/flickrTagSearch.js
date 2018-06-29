import getFlickrApiKey from './getFlickrApiKey';
import {path, composeP, map} from "ramda";

//Set these in your entry point
export const appSettings = {
    uri: 'https://api.flickr.com/services/rest/',
    key: getFlickrApiKey()
}

const toJson = (response) => response.json();
const photoFromBody = path(["photos", "photo"])

const photoUrl = (size) => (photo) =>
`https://farm${photo.farm}.staticflickr.com/` +
`${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`

const square = photoUrl('q');
const medium = photoUrl('z');
const large = photoUrl('k');

const mapPhoto = (photo) => ({
    square: square(photo),
    medium: medium(photo),
    large: large(photo)
})

// This allows your to trace steps of a pipe or composition to the console
const trace = (tag) => (val) =>{
    console.log(tag, val)
    return val;
}

export const fetchPhotos = (appSettings) => (tag, page) =>
     fetch(
        appSettings.uri +
        '?method=flickr.photos.search' +
        '&api_key=' + appSettings.key +
        '&page=' + page +
        '&tags=' + tag +
        '&tag_mode=all' +
        '&format=json' +
        '&nojsoncallback=1'
     );
     fetchPhotos(appSettings)

export const mapResponseToPhotos = (httpService) => composeP(map(mapPhoto), photoFromBody, toJson, httpService);

export const flickrTagSearch = (getPhotos) => (tag) => {
    return {
        [Symbol.iterator]: function*() {
            let pageIndex = 1
            while(true) {
                yield  getPhotos(tag, pageIndex);
                pageIndex = pageIndex + 1;
            }
        }
    }
}