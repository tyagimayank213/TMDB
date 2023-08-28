import axios from "axios";

const TMBD_TOKEN= `${import.meta.env.VITE_APP_TMBD_TOKEN}`;

const headers = {
    accept:'application/json',
    Authorization :"Bearer "+TMBD_TOKEN
};
export const fetchDataFromApi = async(url,params)=>{
    try{
        const {data}= await axios.request({
            method: 'GET',
            url:`https://api.themoviedb.org/3${url}`,
            headers:headers,
            params:params
        })
        return data;
    } catch(err){
        console.log(err);
        return err;
    }
}
