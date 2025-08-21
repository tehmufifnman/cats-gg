export default (url) =>
    new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(url);
        img.onerror = () => reject(url);
        img.src = url;
    }).catch(error => {
        console.error('Error preloading image at url', url, error);
        return null;
    });
