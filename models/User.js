const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/database');  

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: true 
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true 
  },
  currentOccupation: {
    type: DataTypes.STRING,
    allowNull: true
  },
  emailAddress: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isEmail: true 
    }
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: true
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true
  },
  notificationCheck: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  roadmapPathway: {
    type: DataTypes.STRING,
    allowNull: true
  },
  targetRole: {
    type: DataTypes.STRING,
    allowNull: true
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
  timestamps: true
});

module.exports = User;

