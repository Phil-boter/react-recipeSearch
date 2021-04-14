import axios from "axios";

var instance = axios.create({
    xsrfCookieName: "SameSite",
    xsrfHeaderName: "csrf-token",
});

export default instance;
