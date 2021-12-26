const  {
    MYSQL_DATABASE,
    MYSQL_USER,   
    MYSQL_PASSWORD,   
    MYSQL_HOST,
} = process.env

module.exports = {
    dialect: 'mysql',
    host: MYSQL_HOST,
    username: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database:  MYSQL_DATABASE,
    define: {
      timestamps: true,
      underscored: true,
    }
}