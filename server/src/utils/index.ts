import { CustomRequest } from "@/types";
import { NextFunction, Response } from "express";

export const tryCatch = <T>(
    controllerFn: (req: CustomRequest, res: Response, next: NextFunction) => Promise<T>,
) => {
    return async (req: CustomRequest, res: Response, next: NextFunction) => {
        try {
            await controllerFn(req, res, next);
        } catch (error) {
            next(error);
        }
    }
}