const jwt = require('jsonwebtoken')

const token = process.argv[2].split('\n').find((v) => v.includes('ey')).trim()
const secret = process.argv[3]

;(async () => {


  try {
    const data = jwt.verify(token, secret)
    console.log(`::set-output name=netkey_valid::${data.exp <= Date.now() / 1000}`)
  } catch (_) {
    console.log('::set-output name=netkey_valid::false')
  }


})()
