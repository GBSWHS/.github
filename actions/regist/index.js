const jwt = require('jsonwebtoken')

const token = JSON.parse(process.argv[2]).split('\n').find((v) => v.includes('ey')).trim()
const secret = process.argv[3]

;(async () => {


  try {
    jwt.verify(token, secret)
    console.log(`::set-output name=netkey_valid::true`)
  } catch (_) {
    console.log('::set-output name=netkey_valid::false')
  }


})()
