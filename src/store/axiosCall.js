import axios from 'axios';


export const getAxios = (endPoint, data = {}, config = {}) =>
    axios({
        url: `http://ec2-54-176-96-77.us-west-1.compute.amazonaws.com:8080${endPoint}`,
        method: 'get',
        withCredentials: true,
        data: data,
        ...config,
    });

export const postAxios = (endPoint, params = {}, config = {}) =>
    axios({
        url: `http://ec2-54-176-96-77.us-west-1.compute.amazonaws.com:8080${endPoint}`,
        method: 'POST',
        withCredentials: true,
        data: params,
        ...config,
    });

export const deleteAxios = (endPoint) =>
    axios({
        url: `http://ec2-54-176-96-77.us-west-1.compute.amazonaws.com:8080${endPoint}`,
        method: 'DELETE',
        withCredentials: true,
    });


// // 사용예시
// getAxios('/user/list').then((res) => {
//     console.log(res);
// });

// postAxios('/user/register', {
//     motto: 'string',
//     nickname: 'string',
// }).then((res) => {
//     console.log(res);
// });
