export const isEmpty = (text) => {
    let isEmpty = false;

    if(text === "" || text.legth === 0) {
        isEmpty = true;
    }

    return isEmpty;
}