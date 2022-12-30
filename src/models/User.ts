import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface UserInstance extends Model{
    id: number,
    username: string,
    password: string,
    accesslevel: number,
    nome: string
};

export const User = sequelize.define<UserInstance>('User', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    username: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    accesslevel: {
        type: DataTypes.INTEGER,
        defaultValue: 4
    },
    nome: {
        type: DataTypes.STRING
    }   
}, {
    tableName: 'users',
    timestamps: false
});