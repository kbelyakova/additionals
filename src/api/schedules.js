import axios from 'axios';

export const _getScheduleByUser = (user) => axios.get(`http://localhost:4263/api/Schedule/${user}/user`);

export const _getScheduleById = (id) => axios.get(`http://localhost:4263/api/Schedule/${id}`);

export const _createSchedule = (items) => axios.post(`http://localhost:4263/api/Schedule?Name=${items.name}&Monday=${items.monday}&Tuesday=${items.tuesday}&Wednesday=${items.wednesday}&Thursday=${items.thursday}&Friday=${items.friday}&Saturday=${items.saturday}&Sunday=${items.sunday}&UserId=${items.userId}`);