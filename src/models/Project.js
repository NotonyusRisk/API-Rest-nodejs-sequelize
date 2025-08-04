import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';
import { Task } from './Task.js';

export const Project = sequelize.define('Project', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    priority: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    timestamps: true
}
);

Project.hasMany(Task, { foreignKey: 'ProjectId', sourceKey: 'id' });

Task.belongsTo(Project, { foreignKey: 'ProjectId', targetKey: 'id' });