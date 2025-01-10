import axios from 'axios';

// Hàm lấy dữ liệu yêu thích
async function FavoriteApi() {
    try {
        const response = await axios.get('https://library-manage-be.onrender.com/book/favorite-book');

        return response.data;  // Trả về dữ liệu yêu thích
    } catch (error) {
        // Xử lý lỗi
        console.error('Error fetching favorite books:', error.response ? error.response.data : error.message);
        throw error;
    }
}

async function LastestBookApi() {
    try {
        const response = await axios.get('https://library-manage-be.onrender.com/book/lastest-book');

        return response.data;  // Trả về dữ liệu yêu thích
    } catch (error) {
        // Xử lý lỗi
        console.error('Error fetching lastest books:', error.response ? error.response.data : error.message);
        throw error;
    }
}

async function BookDetailApi(id) {
    try {
        const response = await axios.get(`https://library-manage-be.onrender.com/book/book-detail/${id}`);

        return response.data;  
    } catch (error) {
        // Xử lý lỗi
        console.error('Error fetching book-detail:', error.response ? error.response.data : error.message);
        throw error;
    }
}

async function BookProposesApi(id) {
    try {
        const response = await axios.get(`https://library-manage-be.onrender.com/book/book-proposes/${id}`);

        return response.data;  
    } catch (error) {
        // Xử lý lỗi
        console.error('Error fetching book-proposes:', error.response ? error.response.data : error.message);
        throw error;
    }
}

async function GetAllBookApi() {
    try {
        const response = await axios.get('https://library-manage-be.onrender.com/book/all-book');

        return response.data;
    } catch (error) {
        // Xử lý lỗi
        console.error('Error during login:', error.response ? error.response.data : error.message);
        throw error;
    }
}

async function createBookApi(title, author, topic, subcategory, tag, publisher, publication_year, edition, summary, language, cover) {
    try {
        console.log(title, author, topic, subcategory, tag, publisher, publication_year, edition, summary, language, cover);
        const response = await axios.post('https://library-manage-be.onrender.com/book/create-book', {
            title, 
            author, 
            topic, 
            subcategory, 
            tag, 
            publisher, 
            publication_year, 
            edition, 
            summary, 
            language, 
            cover
        });

        return response.data; // Trả về dữ liệu phản hồi từ API
    } catch (error) {
        console.error('Error during creating book:', error.response ? error.response.data : error.message);
        throw error;
    }
}

async function GetAllTopicApi() {
    try {
        const response = await axios.get('https://library-manage-be.onrender.com/book/all-topic');

        return response.data;
    } catch (error) {
        // Xử lý lỗi
        console.error('Error during login:', error.response ? error.response.data : error.message);
        throw error;
    }
}

async function createTopicApi(topic) {
    try {
        const response = await axios.post('https://library-manage-be.onrender.com/book/create-topic', {
            topic
        });

        return response.data; // Trả về dữ liệu phản hồi từ API
    } catch (error) {
        console.error('Error during creating book:', error.response ? error.response.data : error.message);
        throw error;
    }
}

export { 
    FavoriteApi, 
    LastestBookApi, 
    BookDetailApi, 
    BookProposesApi,
    GetAllBookApi,
    createBookApi,
    GetAllTopicApi,
    createTopicApi
};  
