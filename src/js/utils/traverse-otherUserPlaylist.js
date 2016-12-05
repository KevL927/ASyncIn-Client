export default function traverse(origin, proplist) {
    return proplist.length ?
        traverse(origin[proplist.shift()], proplist) : origin;
}