export function saveObjArr(name: any, data: any) {
    // localStorage 存储数组对象的方法
    localStorage.setItem(name, JSON.stringify(data))
}

export function getObjArr(name: any) {
    // localStorage 获取数组对象的方法
    const res = window.localStorage.getItem(name)
    if (res && res !== 'undefined') {
        return JSON.parse(res)
    }
    return false
}

export function clearLocalStorage(name: any) {
    localStorage.removeItem(name)
}

export function saveSession(name: any, data: any) {
    // sessionStorage 存储数组对象的方法
    sessionStorage.setItem(name, JSON.stringify(data))
}

export function getSession(name: any) {
    // sessionStorage 获取数组对象的方法
    const res = window.sessionStorage.getItem(name)
    if (res && res !== 'undefined') {
        return JSON.parse(res)
    }
    return false
}

export function clearSession(name: any) {
    sessionStorage.removeItem(name)
}
