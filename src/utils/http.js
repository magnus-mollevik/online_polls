import Axios from 'axios';

const http = Axios.create({

    baseUrl: `${process.env.BASE_URL}`,
});

export default http;