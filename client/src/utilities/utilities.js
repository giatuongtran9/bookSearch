

export function sortAsc(arr, sortValue) {
    return arr.sort((a,b) => (a[sortValue] > b[sortValue]) ? 1 : (b[sortValue] > a[sortValue]) ? -1 : 0)
}

export function sortDesc(arr, sortValue) {
    return arr.sort((a,b) => (new Date(b[sortValue]) - new Date(a[sortValue])))
}