const status = require('../utilities/jssendStatus');
const GetuserInfo = require('../utilities/GetUserInfo');
const UserModel = require('../models/user.model');
const ContactModel = require('../models/contact.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const GetAllUsersController = async (req, res) => {
    try {
        const AllUsers = await UserModel.find({}, { __v: false });
        res.status(200).json({
            status: status.SUCCESS,
            value: AllUsers
        });
    } catch (err) {
        res.status(404).json({
            status: status.ERROR,
            message: "ERROR WHEN GET ALL USERS FROM DB"
        });
    }
};

const AddUserController = async (req, res) => {
    try {
        const { username = "", email = "", phone = "", password = ""} = req.body;
        const CheckUserExsist = await UserModel.findOne({ 
            $or: [{ email }, { phone }] 
        });
        let errors = {};

        if (!username.trim()) errors.username = "Username is required";
        if (!email || typeof email !== "string" || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errors.email = "Invalid email format";
        if (!phone || typeof phone !== "string" || !phone.match(/^\d{7,}$/)) errors.phone = "Phone number is invalid";
        if (!password || password.length < 6) errors.password = "Password must be at least 6 characters";
        if (CheckUserExsist) errors.UserExist = "User already exists";
        
        if (Object.keys(errors).length > 0) {
            return res.status(400).json({
                status: status.ERROR,
                errors
            });
        }

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
        const userAgent = GetuserInfo(req);
        const newUser = new UserModel({ username, email, phone, password: hashedPassword, role: "user" ,userAgent});
        await newUser.save();

        const token = jwt.sign({ id: newUser._id, email: newUser.email, username: newUser.username }, process.env.SECRET_KEY, { expiresIn: "7d" });

        res.cookie("token", token, {
            httpOnly: false,
            secure: process.env.NODE_ENV === "production",
            maxAge: 7 * 24 * 60 * 60 * 1000 
        });
        res.cookie("email", newUser.email, {
            httpOnly: false,
            secure: process.env.NODE_ENV === "production",
            maxAge: 7 * 24 * 60 * 60 * 1000 
        });
        res.cookie("username", newUser.username, {
            httpOnly: false,
            secure: process.env.NODE_ENV === "production",
            maxAge: 7 * 24 * 60 * 60 * 1000 
        });

        res.cookie("role", newUser.role, {
            httpOnly: false,
            secure: process.env.NODE_ENV === "production",
            maxAge: 7 * 24 * 60 * 60 * 1000 
        });

        res.status(201).json({
            status: status.SUCCESS,
            message: "User added successfully",
            user: newUser
        });
    } catch (err) {
        res.status(500).json({
            status: status.ERROR,
            message: "ERROR WHEN ADDING USER"
        });
    }
};

const LoginUserController = async (req, res) => {
    try {
        const { email = "", password = "" } = req.body;

        if (!email) {
            return res.status(400).json({ status: "ERROR", message: "Email is required" });
        }

        if (!password) {
            return res.status(400).json({ status: "ERROR", message: "Password is required" });
        }

        if (password.length < 6) {
            return res.status(400).json({ status: "ERROR", message: "Password must be at least 6 characters" });
        }

        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(400).json({ status: "ERROR", message: "User does not exist" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({ status: "ERROR", message: "Invalid password" });
        }

        const userAgent = GetuserInfo(req);
        await UserModel.findOneAndUpdate({ email }, { userAgent });

        const token = jwt.sign(
            { id: user._id, email: user.email, username: user.username },
            process.env.SECRET_KEY,
            { expiresIn: "7d" }
        );

        res.cookie("token", token, { httpOnly: false, secure: process.env.NODE_ENV === "production", maxAge: 7 * 24 * 60 * 60 * 1000 });
        res.cookie("email", user.email, { httpOnly: false, secure: process.env.NODE_ENV === "production", maxAge: 7 * 24 * 60 * 60 * 1000 });
        res.cookie("username", user.username, { httpOnly: false, secure: process.env.NODE_ENV === "production", maxAge: 7 * 24 * 60 * 60 * 1000 });
        res.cookie("role", user.role, { httpOnly: false, secure: process.env.NODE_ENV === "production", maxAge: 7 * 24 * 60 * 60 * 1000 });

        res.status(200).json({
            status: "SUCCESS",
            message: "User logged in successfully",
        });

    } catch (err) {
        res.status(500).json({ status: "ERROR", message: `Error during login: ${err.message}` });
    }
};


const AddNewRequest = async (req, res) => {
    try {
        const { firstname, lastname, email, phone, address, message } = req.body;
        const { token } = req.cookies;
        const GetUserByEmail = await UserModel.findOne({email});
        if (!token) {
            return res.status(401).json({
                status: status.ERROR,
                message: "Unauthorized: No token provided"
            });
        }

        let decoded;
        try {
            decoded = jwt.verify(token, process.env.SECRET_KEY);
        } catch (err) {
            return res.status(401).json({
                status: status.ERROR,
                message: "Unauthorized: Invalid token"
            });
        }

        const user = await UserModel.findById(decoded.id);
        if (!GetUserByEmail) {
            return res.status(404).json({
                status: status.ERROR,
                message: "User not found"
            });
        }

        let errors = {};

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Invalid email format";
        if (!phone || phone.length < 7 || !/^\d+$/.test(phone)) errors.phone = "Invalid phone number";

        if (Object.keys(errors).length > 0) {
            return res.status(400).json({
                status: status.ERROR,
                errors
            });
        }

        await UserModel.findOneAndUpdate({email},{requests:{ firstname, lastname, email, phone, address, message }})

        console.log({
            status: status.SUCCESS,
            message: "Request submitted successfully",
            data: {
                user: {
                    id: user._id,
                    email: user.email,
                    username: user.username
                },
                request: { firstname, lastname, email, phone, address, message }
            }
        })
        res.status(200).json({
            status: status.SUCCESS,
            message: "Request submitted successfully",
            data: {
                user: {
                    id: user._id,
                    email: user.email,
                    username: user.username
                },
                request: { firstname, lastname, email, phone, address, message }
            }
        });

    } catch (error) {
        res.status(500).json({
            status: status.ERROR,
            message: "Internal Server Error"
        });
    }
};

const CheckTheJWT = async (req, res) => {
    try {
        const { token } = req.cookies;

        if (!token) {
            return res.status(401).json({
                status: status.ERROR,
                message: "Unauthorized: No token provided"
            });
        }

        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    status: status.ERROR,
                    message: "Unauthorized: Invalid token"
                });
            }

            res.status(200).json({
                status: status.SUCCESS,
                message: "Token is valid",
                user: {
                    id: decoded.id,
                    email: decoded.email,
                    username: decoded.username
                }
            });
        });

    } catch (error) {
        res.status(500).json({
            status: status.ERROR,
            message: "Internal Server Error"
        });
    }
};

const constContactUsSendMessageController =  async (req, res) => {
    try {
        const {firstname,lastname,email,phone,message} = req.body;
        const newContact = new ContactModel({firstname,lastname,email,phone,message});
        await newContact.save();
        res.status(404).json({
            status:status.SUCCESS,
            data:newContact
        })
    } catch (err) {
        res.status(404).json({
            status: status.ERROR,
            message: `ERROR WHEN SEND MESSAGE ${err}`
        });
    }
};

const RemoveRequstesFromDb = async (req, res) => {
    try {
        const { email } = req.cookies;
        if (!email) {
            return res.status(400).json({ status: "fail", message: "Email is required" });
        }

        const user = await UserModel.findOneAndUpdate(
            { email },
            { $set: { requests: {} } },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ status: "fail", message: "User not found" });
        }

        res.json({ status: "success", message: "Requests removed successfully", data: user });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};


const RemoveUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await UserModel.findOneAndDelete({_id:id})
        console.log(user)


        res.json({ status: "success", message: "USER removed successfully", data: user });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};

module.exports = {
    GetAllUsersController,
    AddUserController,
    LoginUserController,
    AddNewRequest,
    CheckTheJWT,
    constContactUsSendMessageController,
    RemoveRequstesFromDb,
    RemoveUser
};
