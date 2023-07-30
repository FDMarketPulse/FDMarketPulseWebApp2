

function toCamelCase(str) {
    return str.replace(/([-_][a-z])/ig, ($1) => {
        return $1.toUpperCase()
            .replace('-', '')
            .replace('_', '');
    });
};

export function camelizeKeysMod(obj) {
    if (Array.isArray(obj)) {
        return obj.map(item => camelizeKeysMod(item));
    } else if (typeof obj === 'object' && obj !== null) {
        return Object.keys(obj).reduce((accumulator, key) => {
            accumulator[toCamelCase(key)] = camelizeKeysMod(obj[key]);
            return accumulator;
        }, {});
    }
    return obj;
}
