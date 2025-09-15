/**
 * value可以保存任意类型，会自动进行序列化和反序列化
 * 且在其他地方使用useCookie的数据是可以响应式变更，刷新页面数据
 * @param name
 */
export function getCookie(name: string) {
    const cookieData = useCookie(
        name,
        {
            default: () => (''),
            watch: false
        }
    )
    return cookieData.value
}

export function setCookie(name: string, value: any) {
    const list = useCookie(
        name,
        {
            default: () => (''),
            watch: 'shallow',
            maxAge: 7 * 24 * 60 * 60
        }
    )
    list.value = value
}
