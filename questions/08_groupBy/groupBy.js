function groupBy(arr, attr) {
arr.reduce((groupDict,nextItem)=>{
    let groupDictKey;
    if(typeof attr==='function'){
        groupDictKey(nextItem);
    }else{
        groupDictKey=nextItem{attr};
    }
})
}

module.exports = { groupBy };
