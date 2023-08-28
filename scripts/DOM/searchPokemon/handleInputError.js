import { changeInputValidation } from "./changeInputValidation.js";
import { changeSearchErrorMessage } from "./changeSearchErrorMessage.js";
import { changeSearchStyle } from "./changeSearchStyle.js";

export const handleInputError = (hasErrorOccured, errorMessage) => {
    changeSearchErrorMessage(errorMessage);
    changeSearchStyle(hasErrorOccured);
    changeInputValidation(hasErrorOccured);
}