import jwt from 'jsonwebtoken'

const encodeAuthToken = (id, email) => {
    return  jwt.sign({ id, email }, process.env.JWT_SECRET);

}




export { encodeAuthToken };