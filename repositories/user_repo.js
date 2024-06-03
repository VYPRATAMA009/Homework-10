import prisma from "../config/database.js";

class UserRepo {
    static async getAll() {
        const limit = 10;
        const skip = (page -1) * limit;
        const data = await prisma.users.findMany({
            take: limit,
            skip: skip
        });
        return data;
    }

    static async getById(id) {
        const data = await prisma.users.findUnique({
            where: {
                id: id,
            }
        });
        return data;
    }

    static async createUser(userData) {
        const data = await prisma.users.create({
            data: {
                email: userData.email,
                gender: userData.gender,
                password: userData.password,
                role: userData.role
            }
        });
        return data;
    }

    static async editUser(id, userData) {
        const data = await prisma.users.update({
            where: {
                id: id,
            }, data: {
                email: userData.email,
                gender: userData.gender,
                password: userData.password,
                role: userData,role
            }
        });
        return data;
    }

    static async deleteUser(id) {
        const data = await prisma.users.delete({
            where: {
                id: id
            }
        });
    }
} 
export default UserRepo;