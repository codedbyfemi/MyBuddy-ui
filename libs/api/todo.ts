import axios from 'axios';

interface Todo {
    title: string;
    isComplete: false;
}

interface Journal {
    content: string;
}

export async function addTodo(data: Todo) {
    try {
        const API_URL = 'http://localhost:3000/api'
        const response = await axios.post(`${API_URL}/todo`,{
            data,
        });
        return response.data
    } catch (error: unknown) {
        let message = "Failed to signup"
        if (message) {
            console.log(message)
        } else {
            console.log("Network server")
        }
    }
}



export async function journal(data: Journal) {
    try {
        const API_URL = 'http://localhost:3000/api'
        const response = await axios.post(`${API_URL}/journal`,{
            data,
        });
        return response.data
    } catch (error: unknown) {
        let message = "Failed to signup"
        if (message) {
            console.log(message)
        } else {
            console.log("Network server")
        }
    }
}