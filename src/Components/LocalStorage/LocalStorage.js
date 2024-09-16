const getDataFromLs = () =>{
    const getData = localStorage.getItem('book-list');
    if(getData){
        return JSON.parse(getData);
    }
    return [];

}

const saveDataToLs = bookId =>{
    const storedBooks = getDataFromLs();
    const exist = storedBooks.find(book => book === bookId)
    if(!exist){
        storedBooks.push(bookId);
        localStorage.setItem('book-list', JSON.stringify(storedBooks))
    }
    
}
export {getDataFromLs, saveDataToLs}