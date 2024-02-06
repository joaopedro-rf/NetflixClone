import axios from 'axios';
import { useMutation } from 'react-query'; 

const postData = async (data) => {
    return await axios.post("http://localhost:8080/api/users/login", data);
}

export function useLoginMutation() {
    const mutate = useMutation({
        mutationFn: postData,
    });
    console.log(mutate);
    return mutate;
}
