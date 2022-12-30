import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface GaragemInstance extends Model{
    placa: string,
    modelo: string,
    capacidade: string,
    status: string
};

export const Garagem = sequelize.define<GaragemInstance>('User', {
    placa: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    modelo: {
        type: DataTypes.STRING
    },
    capacidade: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.STRING
    }   
}, {
    tableName: 'garagem',
    timestamps: false
});