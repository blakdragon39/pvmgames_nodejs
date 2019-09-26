import { Request, Response } from "express";

const users = ['Jenna', 'Tyler', 'Brynn', 'Odin', 'Quinn'];

export const getUser = (req: Request, res: Response) => {
    const name: string = req.query.name;

    if (users.includes(name)) {
        res.send("success")
    } else {
        res.send("error")
    }
};