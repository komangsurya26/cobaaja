const fs = require('fs');
const readlinesync = require('readline-sync');

const semuaData = './database/users.json';

const database = [] 

try {
  const data = fs.readFileSync(semuaData)
  database = JSON.parse(data)
} catch (err) {
  console.error(err)
}

const getAllUser = () => {
  if (database.length === 0) {
    console.log('Tidak ada pengguna yang tersedia')
    return
  }
  console.clear()
  console.log('Daftar pengguna:\n')
  console.log('====================\n')
  console.log('====================\n')

  database.forEach((users,index) => {

    console.log(`USER NO ${index+1}\n
    NAMA: ${users.nama}\n
    UMUR: ${users.umur} tahun\n
    ALAMAT: ${users.alamat}\n`
    )
    
  })

  const optionKembali = readlinesync.question('\n\nsilahkan tekan 2 untuk kembali ')
  console.clear()

  return optionKembali
}

module.exports = { getAllUser }
