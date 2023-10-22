import ApiRequest from "../utils/config/axios.config";

export default function getRandomUser() {
    return ApiRequest.get('/' , {
        validateStatus: function (status) {
            return status < 500;
        }
    });//https:randomuser
}
