export const fetchErrorsOccured = (fetchedObject) => {
    const hasFetchError = Object.keys(fetchedObject).includes("status");
    
    return hasFetchError;
}