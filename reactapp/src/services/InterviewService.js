import axios from 'axios';

const BASE_URL = 'https://8080-fbdedafcaedabcdd333220481ebaccebeedctwo.premiumproject.examly.io/api/interviews';

export const addInterview = (interview) => axios.post(`${BASE_URL}/add`, interview);
export const getAllInterviews = () => axios.get(`${BASE_URL}/list`);
export const updateInterview = (id, interview) => axios.put(`${BASE_URL}/update/${id}`, interview);
export const deleteInterview = (id) => axios.delete(`${BASE_URL}/delete/${id}`);
export const getInterviewById = (id) => axios.get(`${BASE_URL}/list`).then(res => {
  return res.data.find(i => i.id === parseInt(id));
});
