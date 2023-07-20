export const checkForFetchErrors = (fetchedObject) => {
    const hasFetchError = Object.keys(fetchedObject).includes("status");
    
    return hasFetchError;
}