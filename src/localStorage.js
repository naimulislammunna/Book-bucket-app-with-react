const getDataFromLocalStore = () => {
    const getReadData = localStorage.getItem('readList');
    if(getReadData){
        return JSON.parse(getReadData)
    }
    else{
        return [];
    }
}

const setDataToLocalStore = (id) =>{
    const oldData = getDataFromLocalStore();
    const exist = oldData.find(data => data == id);
    if(!exist){
        oldData.push(id);
        localStorage.setItem('readList', JSON.stringify(oldData))
    }
}

const getDataFromLocalStoreWish = () => {
    const getWishData = localStorage.getItem('wishList');
    if(getWishData){
        return JSON.parse(getWishData)
    }
    else{
        return [];
    }
}

const setDataToLocalStoreWish = (id) =>{
    const oldData = getDataFromLocalStoreWish();
    const exist = oldData.find(data => data == id);
    if(!exist){
        oldData.push(id);
        localStorage.setItem('wishList', JSON.stringify(oldData))
    }
}

export {getDataFromLocalStore, setDataToLocalStore, getDataFromLocalStoreWish, setDataToLocalStoreWish}