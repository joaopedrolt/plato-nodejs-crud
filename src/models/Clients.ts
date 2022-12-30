import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface ClientsInstance extends Model{
    id: number,
    nome: string,
    cnpj: string,
    cep: string,
    logradouro: string,
    setor: string,
    numero: string,
    email: string
}
export const Clients = sequelize.define<ClientsInstance>('Clients', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nome: {
        type: DataTypes.STRING
    },
    cnpj: {
        type: DataTypes.STRING
    },
    cep: {
        type: DataTypes.STRING
    },
    logradouro: {
        type: DataTypes.STRING
    },
    setor: {
        type: DataTypes.STRING
    },
    numero: {
        type: DataTypes.STRING
    }, 
    email: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'clientes',
    timestamps: false
});