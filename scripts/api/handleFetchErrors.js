export const handleFetchErrors = (status) => {
    const serverErrorpattern = /^5/;
    const error = {
        "status": status,
        "message": "",
        "userTip": "",
    }
    
    if(status === 404) {
        error.message = "Pokemon not found";
        error.userTip = "Check if the pokemon's name or pokemon's id is correct.";
        return error;
    }

    if(serverErrorpattern.test(status)) {
        error.message = "Server error";
        error.userTip = "Try again later.";
        return error;
    }
    else {
        error.message = "Unsuspected error";
        error.userTip = "Try again later.";
        return error;

    }
}