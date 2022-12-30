import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface PedidosInstance extends Model{
    id: number,
    origem: string,
    destino: string,
    carregamento: string,
    cliente: string,
    motorista: string,
    status: string
}
export const Pedidos = sequelize.define<PedidosInstance>('Pedidos', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    origem: {
        type: DataTypes.STRING
    },
    destino: {
        type: DataTypes.STRING
    },
    carregamento: {
        type: DataTypes.STRING
    },
    cliente: {
        type: DataTypes.STRING
    },
    motorista: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'pedidos',
    timestamps: false
});