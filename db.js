const Sequelize = require("sequelize")


const db=new Sequelize('shopdb', 'shopper', 'shoppass', {
    host: 'localhost',
    dialect: 'mysql'
  })

  db.authenticate().then(()=>{
    console.log("connection succesfull");
    
  }).catch((err)=>{
  console.error("hello error",err);
  })

  const User=db.define('user',{
      id:{
          type:Sequelize.INTEGER,
          autoIncrement:true,
          primaryKey:true
      },
      name:
      {
          type:Sequelize.STRING,
          allowNull:false
      }

  })

  const Product=db.define('products',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:Sequelize.STRING,
    manufacturer:Sequelize.STRING,
    price:{
        type:Sequelize.FLOAT,
        allowNull:false,
        defaultValue:0.0
    }
        
  })
  db.sync()
  .then(() => console.log("Database has been synced"))
  .catch((err) => console.error("Error creating database"))

  exports=module.exports={
      User,Product
  }