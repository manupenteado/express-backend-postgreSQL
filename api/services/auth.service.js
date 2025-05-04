import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../models/index.js';

export const registerUser = async (name, email, password) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    const savedUser = await db.users.create({ 
        name, 
        email, 
        password: hashedPassword 
    });
    
    return savedUser;
};

export const loginUser = async (email, password) => {
    const user = await db.users.findOne({ 
        where: { email } 
    });
    
    if (!user) throw new Error('User not found');
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid credentials');

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'secret_key', { 
        expiresIn: '1h' 
    });
    
    return { token, user };
};