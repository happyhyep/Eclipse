import { getAxios, postAxios, deleteAxios } from './axiosCall';
import axios from 'axios';

// export const getTest = () => getAxios('/test');

export function getTest() {
    axios.get('/')
  }

//   export function getTest() {
//     axios.get('/test')
//          .then(res => {
//            console.log(res.data)
//          })
//   }