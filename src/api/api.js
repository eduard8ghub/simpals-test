import axios from "axios";


const instance = axios.create({
    baseURL: "http://localhost:3001/",
});

export const testAPI = {
    getPosts() {
        return instance.get('/posts')
            .then(response => response.data)
    },
    deletePost(id) {
        return instance.delete(`/posts/${id}`)
    },
    addPost(title, body, tags) {
        return instance.post('/posts', {
            title, body, tags
        }).then(response => response.data);
    }
};