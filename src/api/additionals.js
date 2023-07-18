import axios from 'axios';

export const _getAdditionals = () => axios.get('http://localhost:65438/api/Lessons/user/user');

export const _getAdditionalsById = (id) => axios.get(`http://localhost:65438/api/Lessons/${id}`);

export const _createAdditional = (id, schedule, name, additional) => axios.post(`http://localhost:65438/api/Lessons?Name=${name}&Type=${id}&Age=${additional.age}&Description=${additional.description}&ScheduleId=${schedule}&UserId=${additional.userId}`);

export const _editAdditional = (id, schedule, name, additional) => axios.put(`http://localhost:65438/api/Lessons/${id}?Name=${additional.name}&Type=${additional.type}&Age=${additional.age}&Description=${additional.description}&ScheduleId=${schedule}&UserId=${additional.userId}`);

export const _deleteAdditional = (id) => axios.delete(`http://localhost:65438/api/Lessons/${id}`);