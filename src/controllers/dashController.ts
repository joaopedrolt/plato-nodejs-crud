import { Request, Response } from 'express';
import { Clients } from '../models/Clients';
import { Garagem } from '../models/Garagem';
import { Pedidos } from '../models/Pedidos';
import { User, UserInstance } from '../models/User';
import { getUser } from './loginController';

var userInfo: UserInstance;
var accessLevel: number;
var name: string;
var erroBlank: boolean = false;
var addedAlert: boolean = false;

export const getDashboard = async (req: Request, res: Response)=>{
    
    userInfo = getUser();
    accessLevel = userInfo.accesslevel;
    name = userInfo.nome;

    var funcionarios = await User.findAll();
    var clientes = await Clients.findAll();
    var pedidos = await Pedidos.findAll();
    var garagem = await Garagem.findAll();
    var motoristas = await User.findAll({
        where: {
            accessLevel : 3
        }
    });

    console.log(JSON.stringify(motoristas)); 

    res.render('dashboard', {
        showGestor: (accessLevel == 1) ? true : false,
        showEstoque: (accessLevel == 2) ? true : false,
        showMotorista: (accessLevel == 3) ? true : false,
        name,   
        role: setRole(accessLevel),
        funcionarios,
        clientes,
        pedidos,
        garagem,
        erroBlank,
        addedAlert,
        motoristas
    });

    erroBlank = false;
    addedAlert= false;

};

export const postDashboard = async (req: Request, res: Response)=>{

    console.log(JSON.stringify(req.body));

    if(req.body.pkfuncionario != undefined){  // Deletar Funcionaro
        await User.destroy({
            where: {
                id: req.body.pkfuncionario
            }
        }); 
        res.redirect("/dashboard");
    }
    else{ // Se nao deletar o funcinario
        if(req.body.username != undefined){
    
            if(req.body.accesslevel == "" ||  req.body.nome == "" || req.body.password == "" || req.body.username == ""){
                erroBlank = true
                res.redirect("/dashboard");
            }else{
                addedAlert = true
                let newFuncionario = User.build({
                    username: req.body.username,
                    password: req.body.password,
                    accesslevel: parseInt(req.body.accesslevel),
                    nome: req.body.nome
                });
                await newFuncionario.save();
                res.redirect("/dashboard");
            }

        }else{
            if(req.body.pkplaca != undefined && req.body.modelo == undefined){
                await Garagem.destroy({
                    where: {
                        placa: req.body.pkplaca
                    }
                });
                res.redirect("/dashboard");
            }else{
                if(req.body.pkplaca == undefined && req.body.modelo != undefined){

                    if(req.body.placa == "" ||  req.body.modelo == "" || req.body.capacidade == "" || req.body.status == ""){
                        erroBlank = true
                        res.redirect("/dashboard");
                    }else{
                        addedAlert = true;
                        let newTransporte = Garagem.build({
                            placa: req.body.placa,
                            modelo: req.body.modelo,
                            capacidade: req.body.capacidade,
                            status: req.body.status
                        });
                        await newTransporte.save();
                        res.redirect("/dashboard");
                    }
                }else {

                    if(req.body.pkpedido != undefined){
                        await Pedidos.destroy({
                            where: {
                                id: req.body.pkpedido
                            }
                        });
                        res.redirect("/dashboard");
                    }
                    else{
                        if( req.body.origem != undefined){
                            if(req.body.origem == "" ||  req.body.destino == "" || req.body.carregamento == "" || req.body.cliente == "" || req.body.motorista == "" || req.body.status == "" ){
                                erroBlank = true
                                res.redirect("/dashboard");
                            }
                            else{
                                let newPedidos = Pedidos.build({
                                    origem: req.body.origem,
                                    destino: req.body.destino,
                                    carregamento: req.body.carregamento,
                                    cliente: req.body.cliente,
                                    motorista: req.body.motorista,
                                    status: req.body.status
                                });
                                await newPedidos.save();
                                res.redirect("/dashboard");
                            }
                        }
                        else{
                            if(req.body.pkclientes != undefined){
                                await Clients.destroy({
                                    where: {
                                        id: req.body.pkclientes
                                    }
                                });
                                res.redirect("/dashboard");
                            }
                            else{
                                if(req.body.nome == "" ||  req.body.cnpj == "" || req.body.cep == "" || req.body.logradouro == "" || req.body.setor == "" || req.body.numero == "" || req.body.email == ""  ){
                                    erroBlank = true
                                    res.redirect("/dashboard");
                                }
                                else{
                                    if(req.body.nome != undefined){
                                        let newClients = Clients.build({
                                            nome: req.body.nome,
                                            cnpj: req.body.cnpj,
                                            cep:  req.body.cep,
                                            logradouro: req.body.logradouro ,
                                            setor: req.body.setor,
                                            numero: req.body.numero,
                                            email: req.body.email
                                        });
                                        await newClients.save();
                                        res.redirect("/dashboard");
                                    }else{
                                        res.redirect("/");
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

    }

};

function setRole(accessLevel: number){
    switch (accessLevel){
        case 1: return "Administrador"
        case 2: return "Gestor de Vendas"
        case 3: return "Motorista" 
        default: return "Funcionario"
    }
};

export function Blank(){
    return true;
}