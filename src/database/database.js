import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "projectsdb",
  "postgres",
  "Antoniors2003/",
  {
    host: "localhost",
    dialect: "postgres",
  }
);

export default sequelize;
