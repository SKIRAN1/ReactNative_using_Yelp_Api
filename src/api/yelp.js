import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer sOES01p9zphIKhBIen-5cnc6ulYHFxnRoiyY4jk95d_PLdGaCuOU3bnn62fpt3JIWHkO7388xepLgw7w-w5FtZkIGc36YJoFVZ_rS4kxUk9FYStPy6VEU4ktVOucYXYx",
  },
});
