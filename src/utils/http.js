import Axios from 'axios';
import 'dotenv/config'

const http = Axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`, //kan bruke process.env.BASE_URL, men .env filer virker aldri
});

export default http;