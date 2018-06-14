export default mapper => function* map(iterable) {
    for (const item of iterable) {
        yield mapper(item)
    }
};
