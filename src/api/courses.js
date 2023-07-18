import axios from 'axios';

export const _getCourses = () => axios.get('https://localhost:7024/api/Courses');

export const _getCourseById = (id) => axios.get(`https://localhost:7024/api/Courses/${id}`);