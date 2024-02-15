const jwtToken = require('jsonwebtoken')
const cookie = require('cookie')
const catchError = require('./catchError');




export const token = catchError(async (userid, res) => {
    const readToken = jwtToken.sign({id: userid}, "thisismysecretejsonWebToken", {
        expiresIn: "7d",
    });
    const option = {
        path: '/',
        httpOnly:true,
        expires: new Date(Date.now() + 7 * 24 * 3600000),
        httpOnly: false,
        sameSite: 'strict',
    } 
    return res.status(200).setHeader("Set-Cookie",cookie.serialize(`odoads_goh`, readToken, option)).json({
        success: true,
        message: "Login Successfully"
    })  
})

export const verifyToken = async (req, res, next) => {

    const cookieData = req.cookies;
    if (!cookieData) {
        return res.status(400).json({message: "No Cookie Found"}) 
    }
    const key = `odoads_goh`
    const token = cookieData[key];
    if (!token) {
        return res.status(206).json({message: "No Token Found"})
    } else {
        return jwtToken.verify(token,  "thisismysecretejsonWebToken", async (err, user) => {
            if (err) {
                return res.status(206).json({message: "InValid Token"});
            } else {
const data = user.id
const getid = data.split('&')
if(getid){
            const staffid = getid[0]
            const comapny = getid[1]
          req.id = {userid:  staffid, code : comapny}
        }
            }
        })
    }
}

