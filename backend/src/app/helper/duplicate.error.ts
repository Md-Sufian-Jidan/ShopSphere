import { TGenericsErrorResponse } from "../interface/error.types";


export const handleDuplicateError = (err: any): TGenericsErrorResponse => {
    const matchedArray = err.message.match(/"([^]*)"/);
    return {
        statusCode: 400,
        message: `${matchedArray[1]} - is already exist!`
    }
}