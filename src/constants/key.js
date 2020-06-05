import JWT from 'jsonwebtoken';
const obj = "tadeo";

const KEY = (encoded) => {
    JWT.verify(encoded,obj,(err, dec) => {
        console.log(dec)
    })
}

export default KEY;