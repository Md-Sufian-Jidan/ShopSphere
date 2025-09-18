import mongoose from "mongoose";
import { TErrorSources, TGenericsErrorResponse } from "../interface/error.types";


export const validationError = (err: mongoose.Error.ValidationError): TGenericsErrorResponse => {
    const errorSources: TErrorSources[] = [];
    const error = Object.values(err.errors);
    error.forEach((errObject: any) => {
        errorSources.push({
            path: errObject.path,
            message: errObject.message
        })
    })


    return {
        statusCode: 400,
        message: 'Validation Error',
        errorSources
    }
}