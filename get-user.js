const fs = require ('fs')
const path = require ('path')
const readlinesync = require ('readline-sync')


const dataPath = path.join(__dirname, './database/users.json')

let database = { users: [] }

try {
  const data = fs.readFileSync(dataPath, 'utf8')
  database.users = JSON.parse(data)
} catch (err) {
  console.error(err)
}

const getAllUser = () => {
    if (database.users.length === 0) {
      console.log('Tidak ada pengguna yang tersedia')
      return
    }
    console.clear()
    console.log('Daftar pengguna:\n')
    console.log('====================\n')
    console.log('====================\n')

    database.users.forEach((user) => {
      console.log(`NAMA: ${user.nama}, UMUR: ${user.umur} tahun, ALAMAT: ${user.alamat}\n`)
    })

    const optionKembali = readlinesync.question('\n\nsilahkan tekan 2 untuk kembali ')
    console.clear()

    return optionKembali
  }
  
  module.exports = { getAllUser}
  
