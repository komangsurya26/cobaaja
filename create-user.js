const readlinesync = require ('readline-sync')
const {User} = require ('./models/users')

const createUserDashboard = ()=> {
    console.clear()
    console.log('=========================')
    console.log('masukan data yang akan di simpan')
    console.log('=========================\n')
    const name = readlinesync.question(" masukan nama : ")
    const address = readlinesync.question(" masukan alamat : ")
    const age = readlinesync.question(" masukan umur : ")
    
    const user = new User()
    user.createUser (name,address,age)
 

    console.log('=========================')
    console.log('data berhasil disimpan')
    console.log('=========================\n')

    const optionKembali = readlinesync.question('tekan 1 untuk kembali ')
    console.clear()

    return optionKembali

   
        
    
}
module.exports= {
    createUserDashboard
}
