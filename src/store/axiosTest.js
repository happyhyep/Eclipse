import { getAxios, postAxios, deleteAxios } from './axiosCall';
import axios from 'axios';

// export const getTest = () => getAxios('/test');

async function testFunction () {
  const response = await axios.get('http://ec2-50-18-22-205.us-west-1.compute.amazonaws.com:8080/test');
  console.log(response)
};