const STORAGE_KEY = 'my-curriculum'

export const getItems = () => {
    const tempList = localStorage.getItem(STORAGE_KEY)
        
    if (tempList != null) {
        return JSON.parse(tempList)
    }

    return []
}

export const save = (newCurriculo) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newCurriculo))
}
