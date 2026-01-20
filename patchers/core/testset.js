var test = new Dict("test.dict");

items = new Set();

function add(item) {
    items.add(item);
    
    let items_arr = Array.from(items);
    // Set to array
    post(items_arr, items.size, "\n");
    test.replace("set",items_arr);
}

function del(item) {
    items.delete(item);
    let items_arr = Array.from(items);

    // Set to array
    post(items_arr, items.size, "\n");
    test.replace("set",items_arr );
}