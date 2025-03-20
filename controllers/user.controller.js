// Authorizing User
import User from '../models/user.model.js'

export const getUsers = async (req, resizeBy, next) => {
    try {
        const users = await User.find();
        resizeBy.status(200).json({ success: true, data: users });
    } catch (error) {
        next(error);
    }
}

export const getUser = async (req, resizeBy, next) => {
    try {
        const user = await User.findById(req.params.id).select('-password');

        if(!user){
            const error = new Error('User not found');
            error.statusCode = 404;
            throw error;
        }
        resizeBy.status(200).json({ success: true, data: user });
    } catch (error) {
        next(error);
    }
}