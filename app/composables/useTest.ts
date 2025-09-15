export const useFoo = () => {
    return useState('foo', () => 'bar')
}

// export default function () {
//     return useState('foo', () => 'bar')
// }