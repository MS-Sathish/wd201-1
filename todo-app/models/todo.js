"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static addtodoitems({ title, dueDate }) {
      return this.create({ title: title, dueDate: dueDate, completed: false });
    }

    deletetodoitem({ todo }) {
      return this.destroy({
        where: {
          id: todo,
        },
      });
    }

    static gettodoitems() {
      return this.findAll();
    }

    markAsCompleted() {
      return this.update({ completed: true });
    }
  }
  Todo.init(
    {
      title: DataTypes.STRING,
      dueDate: DataTypes.DATEONLY,
      completed: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Todo",
    }
  );
  return Todo;
};
