const jwt = require('jsonwebtoken');
const fs = require('fs');

const payload = {
    name: 'TTBirds',
    admin: true
}

/**
 * 默认 HS256 签名算法
 */

//  const secret = 'TTBirds';

//  const token = jwt.sign(payload, secret);
//  console.log(token);

//  jwt.verify(token, secret, (err, decoded) => {
//      if (err) {
//          console.log(err.message);
//          return
//      }
//      console.log(decoded);
//  })



/**
 * RS256 签名算法
 */

const privateKey = fs.readFileSync('./config/pri_key.pem');
const token = jwt.sign(payload, privateKey, {algorithm: 'RS256'});
console.log(token);

const publicKey = fs.readFileSync('./config/pub_key.pem');
jwt.verify(token, publicKey, (err, decoded) => {
    if (err) {
        console.log(err.message);
        return
    }
    console.log(decoded);
})
