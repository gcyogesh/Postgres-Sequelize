// utils/success-handler.js
const sendSuccess = (res, message, data = {}, statusCode = 200) => {
    res.status(statusCode).json({ message, data });
};

export default sendSuccess;
