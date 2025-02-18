const UserModel = require('../model/user.model');
const status = require('../utilities/jssendStatus');
const bcrypt = require('bcryptjs')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken');
const GetAllUsersController = async (req, res) => {
    try {

        const AllUsers = await UserModel.find({},{__v:false});
        res.status(200).json({
            status: status.SUCCESS,
            value: AllUsers
        })
    } catch (err) {
        res.status(404).json({
            status: status.ERROR,
            massage: err
        })
    }
}
const GetSpaUserController = async (req, res) => {
    try {
        const UserInfo = await UserModel.findById(req.params.id);
        if (UserInfo) {
            return res.status(200).json({
                status: status.SUCCESS,
                value: UserInfo
            })
        } else {
            return res.status(200).json({
                status: status.FAIL,
                value: null
            })
        }
    } catch (err) {
        res.status(404).json({
            status: status.ERROR,
            massage: err
        })
    }
}
const AddUserController = async (req, res) => {
    try {
        let { name, email, password, phone } = req.body;

        const CheckUser = await UserModel.findOne({ email: email });
        if (CheckUser !== null) {
            console.log("User already exists");
            return res.status(400).json({
                status: status.FAIL,
                message: "USER ALREADY EXISTS"
            });
        }

        if (!name || !email || !password || !phone) {
            console.log("Missing fields");
            return res.status(400).json({
                status: status.FAIL,
                message: "All fields are required"
            });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            console.log("Invalid email format");
            return res.status(400).json({
                status: "FAIL",
                message: "Invalid email format",
            });
        }

        const passwordRegex = /^[A-Za-z\d!@#$%^&*()_+={}\[\]:;"'<>,.?/~`-]{6,}$/;
        if (!passwordRegex.test(password)) {
            console.log("Invalid password format");
            return res.status(400).json({
                status: "FAIL",
                message: "Password Is Invalid",
            });
        }

        const salt = await bcrypt.genSaltSync(10);
        const HashedPassword = await bcrypt.hashSync(password, salt);

        const payload = { name, email };
        const jwtValue = jwt.sign(payload, process.env.JWTSECRETKEY, { expiresIn: '1d' });

        const newUser = new UserModel({ name, email, password: HashedPassword, phone });
        await newUser.save();

        const cookieOptions = {
            HttpOnly: false,
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        };

        console.log("User created successfully, sending response...");
        return res.cookie('email', email, cookieOptions)
            .cookie('token', jwtValue, cookieOptions)
            .cookie('name', name, cookieOptions)
            .status(201)
            .json({
                status: status.SUCCESS,
                value: { post: newUser },
                redirectUrl: '/home' // Add the redirect URL here
            });
    } catch (err) {
        console.error("Error occurred:", err);
        res.status(500).json({
            status: "ERROR",
            message: err.message || err
        });
    }
};





const LoginUserController = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            status: "FAIL",
            message: "ERROR IN VALUE"
        });
    }

    const CheckUser = await UserModel.findOne({ email: email });
    if (!CheckUser) {
        return res.status(404).json({
            status: "FAIL",
            message: "User Not Found"
        });
    }

    const CheckThePass = await bcrypt.compare(password, CheckUser.password);
    if (CheckThePass) {
        const payload = {
            name: CheckUser.name,
            email: email
        };
        const jwtValue = jwt.sign(payload, process.env.JWTSECRETKEY, { expiresIn: '1d' });
        return res.cookie('email', email, { HttpOnly: false, maxAge: 24 * 60 * 60 * 1000 })
            .cookie('token', jwtValue, { HttpOnly: false, maxAge: 24 * 60 * 60 * 1000 })
            .cookie('name', CheckUser.name, { HttpOnly: false, maxAge: 24 * 60 * 60 * 1000 })
            .status(201)
            .json({
                status: "SUCCESS",
                value: true
            });
    } else {
        return res.status(200).json({
            status: "FAIL",
            message: "Password is incorrect"
        });
    }
};



const UpdateUserController = async (req,res) => {
    try {
        const CheckUser = await UserModel.findById(req.params.id);
        if(CheckUser){
            const CheckUser = await UserModel.findByIdAndUpdate(req.params.id,req.body);
            res.status(201).json({
                status:status.SUCCESS,
                value:CheckUser
            })
        }else{
            res.status(404).json({
                status:status.FAIL,
                value:CheckUser,
                massage:"USER NOT FOUND"
            })
        }
    } catch (err) {
        res.status(404).json({
            status: status.ERROR,
            massage: err
        })
    }
}
const DeleteUserController = async (req,res) => {
    try {
        const CheckUser = await UserModel.findById(req.params.id);
        if(CheckUser){
            const CheckUser = await UserModel.findByIdAndDelete(req.params.id);
            res.status(201).json({
                status:status.SUCCESS,
                value:CheckUser
            })
        }else{
            res.status(404).json({
                status:status.FAIL,
                value:CheckUser,
                massage:"USER NOT FOUND"
            })
        }
    } catch (err) {
        res.status(404).json({
            status: status.ERROR,
            massage: err
        })
    }
}
module.exports = {
    GetAllUsersController,
    GetSpaUserController,
    AddUserController,
    UpdateUserController,
    DeleteUserController,
    LoginUserController
}