import jwt from 'jsonwebtoken'
const generateToken = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {expiresIn:'1d'})
        // set jwt as http only cookie
        res.cookie('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            sameSite: 'strict',
            maxAge: 1*24*60*60*1000 // 1day in ms
        });
}
export default generateToken;
