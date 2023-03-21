import axios from "axios";

export default function apiRequests(method,endpoint,data){ 
    return axios({
//დარწმუნდით რომ აუცილებლად ისეთ apiს იყენებთ რომელსაც აქვს რეგისტრაციის ან მონაცმეების მიღბის სერვისი.
//reqres.in ის შმთხვევაშია სეთი სერვისი შექმნილია api/register მისამართზე ამიტომ Registration ფაილში, ფუნქციის გამოძახებისას ვაკითხავთ ამ ენდპონტს
        url:"https://reqres.in/api/"+ endpoint,
        method,
        data
        
})
}