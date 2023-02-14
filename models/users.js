const fs = require ('fs')

class User  {
    constructor(){
        this.data =require ('../database/users.json')
    }

    createUser (name,address,age){
        this.data.push
        ({
            nama : name,
            alamat :address,
            umur : age
        })

        fs.writeFileSync('./database/users.json', JSON.stringify(this.data))
   
    }
   
}


module.exports = {
    User,
}
