import http from './http.js';

const API_POLL_URL = "/polls";
const API_POLL_CREATE_URL = "/polls/create";
const API_POLL_UPDATE_URL = "/polls/update";
const API_POLL_DELETE_URL = "/polls/delete";
const API_USER_CREATE_URL = "/users/create";
const API_USER_LOGIN_URL = "/users/login";

export const list = async () => {
    try{
        return await http.get(`${API_POLL_URL}`);
    }
    catch(err){
        return err.response.data;
    }
};

export const get = async (id) => {
    try{
        return await http.get(`${API_POLL_URL}/${id}`);
    }
    catch(err){
        return err.response.data;
    }
};

export const create = async (data) => {
    try{
        return await http.post(`${API_POLL_CREATE_URL}`, data);
    }
    catch(err){
        return err.response.data;
    }
};

export const update = async (data, id) => {
    try{
        return await http.put(`${API_POLL_UPDATE_URL}/${id}`, data);
    }
    catch(err){
        return err.response.data;
    }
};

export const remove = async (data, id) => {
    try{
        return await http.remove(`${API_POLL_DELETE_URL}/${id}`);
    }
    catch(err){
        return err.response.data;
    }
};

export const register = async (data) =>{
    try{
        return await http.post(`${API_USER_CREATE_URL}`,data)
    }
    catch(err){
        return err.response.data;
    }
}

export const login = async (data) => {
    try{
        return await http.post(`${API_USER_LOGIN_URL}`, data);
    }
    catch(err){
        return err.response.data
    }
}

export default {
    list,
    get,
    create,
    update,
    remove,
    login,
};