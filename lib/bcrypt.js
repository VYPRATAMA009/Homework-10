import bcrypt from 'bcrypt';

const hashPassword = async (password) =>{
    return await bcrypt.hash(password,10);
}

const comparePassword = async (password,hashedpassword) => {
    return await bcrypt.compare(password, hashedpassword);
}

export {
    hashPassword, comparePassword
}