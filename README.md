# JWT
json web token

默认JWT的签名算法用的是 HS256 ，这种算法是对称算法，即签名和验证都用的是同一个密码

此处JWT的签名算法用的是 RS256 ， 这种算法是非对称算法，即用私钥签名，用公钥来验证。

生成私钥：openssl genrsa -out pri_key.pem 2048

生成对应公钥：openssl rsa -in pri_key.pem -pubout -out pub_key.pem
