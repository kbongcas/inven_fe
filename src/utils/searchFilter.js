const performFilterWithIgnore = (searchKey, list, filterProperty, ignoreProperty, ignoreValue) => {
    return  searchKey === "" ?
        [] :
        list.filter(container => container[filterProperty].toLowerCase().includes(searchKey.toLowerCase())
            && container[ignoreProperty] !== ignoreValue
        );
}

const performFilter = (searchKey, list, filterProperty) => {
    return  searchKey === "" ?
        [] :
        list.filter(container => container[filterProperty].toLowerCase().includes(searchKey.toLowerCase()));
}

export const searchFilter = {
    performFilterWithIgnore,
    performFilter
}