import { getAxios, postAxios, deleteAxios } from './axiosCall';
import axios from 'axios';

// export const getTest = () => getAxios('/test');

async function testFunction () {
  const response = await axios.get('http://ec2-54-176-96-77.us-west-1.compute.amazonaws.com:8080/test');
  console.log(response)
};

export default testFunction();