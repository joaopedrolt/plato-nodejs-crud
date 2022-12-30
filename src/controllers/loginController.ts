import { Request, Response } from 'express';
import { sequelize } from '../instances/mysql';
import { User, UserInstance } from '../models/User';

var userInfo: UserInstance;

export const getLogin = async (req: Request, res:Response)=>{

    try {
        await sequelize.authenticate()
        console.log("conectado");
    } catch (error) {
        console.log("deu problema", error);
    }

    res.render('login');
};

export const login = async (req: Request, res: Response)=>{

    var loginUser = await User.findAll({
        where: { username: req.body.login, password: req.body.pass }
    });

    if(loginUser.length != 0){ 
        userInfo = loginUser[0];
        res.redirect("/dashboard");
    } else res.render('login');

};

export function getUser(){
    return userInfo;
}