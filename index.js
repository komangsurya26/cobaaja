
const readlinesync = require ('readline-sync')
const {createUserDashboard} = require('./create-user')
const { getAllUser} = require('./get-user')



const main = () => {
    console.log('=========================')
    console.log('pilih option berikut')
    console.log('   1. create user')
    console.log('   2. semua data user-user')
    console.log('=========================')

    const option =readlinesync.question('berapa pilihanmu ? ')
    const optionNum = parseInt(option)

    if (optionNum >3 || optionNum < 1) {
        console.log( " pilihanmu tidak ada !")
    }

    if (optionNum === 1) {
        const createSucces = createUserDashboard()
        const createSuccesNum = parseInt(createSucces)

        if ( createSuccesNum === 1) {
            main()
        }
    }
    if (optionNum === 2) { 
        
        const readData = getAllUser()
        const readDataNum = parseInt(readData)

        if (readDataNum === 2){
            main()
        }
      }

       
}

main()
