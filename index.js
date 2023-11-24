const app = require('./src/app.js');
const {conn} = require('./src/db.js');

const PORT = 3131;

conn.sync({force: false}).then(()=>{
    console.log("DB connected to server");
    app.listen(PORT, ()=>{
        console.log(`server listening at ${PORT}`);
    })
})
