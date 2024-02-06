import axios from 'axios';
import { useMutation } from 'react-query'; 

const postData = async(data) =>{
    console.log(data);
    return await axios.post("http://localhost:8080/api/users/register", data);
}

export function useRegisterMutation() {
    const mutate = useMutation({
        mutationFn: postData,
    })
    return mutate;
}