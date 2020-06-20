import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer gDclcdkDSMJSQNS6TxHQ7RGtUJlvuU1CAAAybx6ZBuXGA6Onz6PlPL8TUnNeeRQT1JieBlCoP_wOd8AcMaRaeZp8xfl1wKUHlnUI4uZYs57pxtTlqDp1OyxHmF_tXnYx",
  },
});
