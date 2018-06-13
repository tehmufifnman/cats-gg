export default (...funcs) =>
        initValue =>
            funcs.reduce((result, func) => func(result), initValue);
