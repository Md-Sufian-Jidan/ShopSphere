import { Request, Response } from "express";


export const NotFound = (req: Request, res: Response) => {
    res.status(404).json({
        message: 'No Route Matches'
    })
}