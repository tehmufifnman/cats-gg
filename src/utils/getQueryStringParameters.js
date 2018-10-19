
export default () =>
    window.location.search.replace('?', '')
        .split('&')
        .map(kvp => kvp.split('='))
        .reduce((result, [key, value]) => {
            result[key] = value;
            return result;
        }, {});
