import axios from "axios";

const axiosInstance = axios.create();
export const sampleApi = () => {
    axiosInstance.get("", {})
        .then(res => {});

}
