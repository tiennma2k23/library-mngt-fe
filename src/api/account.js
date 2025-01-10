import axios from 'axios';

async function ComfirmApi() {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.post("https://library-manage-be.onrender.com/comfirm", {
            token: token
        });

        return response.data;
    } catch (error) {
        // Xử lý lỗi
        console.error('Error during login:', error.response ? error.response.data : error.message);
        throw error;
    }
}

async function SignupApi(name, email, password) {
    try {
        const response = await axios.post('https://library-manage-be.onrender.com/signup', {
            name: name,
            email: email,
            password: password
        });

        return response.data;
    } catch (error) {
        // Xử lý lỗi
        console.error('Error during login:', error.response ? error.response.data : error.message);
        throw error;
    }
}

async function LoginApi(email, password) {
    try {
        const response = await axios.post('https://library-manage-be.onrender.com/login', {
            email: email,
            password: password
        });

        return response.data;
    } catch (error) {
        // Xử lý lỗi
        console.error('Error during login:', error.response ? error.response.data : error.message);
        throw error;
    }
}

async function GetAllUserApi() {
    try {
        const response = await axios.get('https://library-manage-be.onrender.com/all-user');

        return response.data;
    } catch (error) {
        // Xử lý lỗi
        console.error('Error during login:', error.response ? error.response.data : error.message);
        throw error;
    }
}

async function GetAUserApi(id) {
    try {
        const response = await axios.post('https://library-manage-be.onrender.com/get-user', { id });

        return response.data;
    } catch (error) {
        // Xử lý lỗi
        console.error('Error during login:', error.response ? error.response.data : error.message);
        throw error;
    }
}

export { 
    SignupApi,
    LoginApi,
    ComfirmApi,
    GetAllUserApi,
    GetAUserApi
};  
