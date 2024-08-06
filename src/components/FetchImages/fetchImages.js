import axios from "axios";

// const API_KEY = "Hrkp0tJMC9Vm6X9hVDFX-1iMXAt5mRGXqc3aa53cQik";
const API_KEY = "y7_Bvyt_TQP1bMgl9HJh_HiI9cbo6aT-p5XyD9_6pcE";
axios.defaults.baseURL =  "https://api.unsplash.com/search/photos";

const fetchImages = async (currentPage, searchQuery) => {
    const response = await axios.get("", {
        params: {
            query: searchQuery,
            page: currentPage,
            per_page: 15,
            orientation: "landscape",
            client_id: API_KEY,
        },
    });
    return response.data;
  };

export default fetchImages;