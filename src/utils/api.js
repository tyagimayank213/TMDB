import axios from "axios";

const TMBD_TOKEN= `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGZlM2ZkMzg5NDBkNzc5MjEwOWY0ZWU0Zjg0NmNlMyIsInN1YiI6IjY0ZWM5OTgyYzYxM2NlMDEyY2M2OTI3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Lr72faLX2caZ1pp3j3vrmn_9K4G7jMgczev7AF4h1dA`;

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
