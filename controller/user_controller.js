import UserService  from "../service/user_service.js";

class UserController {
    static async getAllUser(req, res) {
        try {
            const page = req.query;
            const data = await UserService.getUser(page);

            res.status(200).json({
                message: "Get Data Successfull", data
            });

        } catch (error) {
            console.log(error)
            res.status(500).json
            next(error);
        }
    }
    static async getuserById(req, res, next) {
        try {
            const id = parseInt(req.params.id);
            const data = await UserService.getById(id);

            res.status(200).json({
                message: "Get Data By Id Success",
                data
            });
        } catch (error) {
            next(error);
        }
    }
    static async register(req, res, next) {
        try {
            const data = req.body;
            const registerUser = await UserService.register(data);

            res.status(200).json({
                message: "Register Success",
                registerUser
            });
        } catch (error) {
            next(error);
        }
    }
    static async login(req, res, next) {
        try {
            const data = req.body;
            const accessToken = await UserService.login(data);

            res.status(200).json({
                message: "Login Success",
                accessToken
            });
        } catch (error) {
            next(error);
        }
    }
    static async updateUser(req, res, next) {
        try {
            const id = req.token_id;
            const data = req.body;
            const editUser = await UserService.update(id, data);

            res.status(200).json({
                message: "Update User Success",
                editUser
            });
        } catch (error) {
            next(error);
        }
    }
    static async deleteUser(req, res, next) {
        try {
            const id = parseInt(req.params.id);
            const dropUser = await UserService.delete(id);

            res.status(200).json({
                message: "Delete User Success"
            });

        } catch (error) {
            next(error)
        }
    }
}

export default UserController;