export default (url) =>
    new Promise(resolve => {
        const img = new Image();
        img.onload = () => resolve(url);
        img.src = url;
    });
