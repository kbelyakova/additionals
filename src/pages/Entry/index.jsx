import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { observer } from 'mobx-react-lite';
import { FormControl, FormLabel, Input, Button, Select, MenuItem, Typography } from '@mui/material';

import additionals from '../../store/additionals';
import schedules from '../../store/schedules';
import courses from '../../store/courses';

import Header from '../../components/Header';

import styles from './index.module.css';

const Entry = observer(() => {
  const params = useParams();

  const [schedule, setSchedule] = useState(null);

  useEffect(() => {
    schedules.getSchedulesByUser('user');
    courses.getCourseById(params.id);
  }, []);

  const handleCreateEntry = () => {
    additionals.createAdditional(params.id, schedule, courses.item.name);
  };

  const handleChangeInput = (value, type) => {
    additionals.setItem(value.target.value, type);
  };

  const handleChangeSchedule = (value) => {
    setSchedule(value.target.value);
  }; 

  const handleGetSchedules = () => {
    schedules.getSchedulesByUser('user');
  }

  return (
    <div>
      <Header />
      <div className={ styles.form }>
        <Typography variant="h5" component="div">Запись на курс:</Typography>
        <FormControl className={ styles.input }>
          <FormLabel>Возраст</FormLabel>
          <Input placeholder="Введите возраст" onChange={ (value) => handleChangeInput(value, 'age') } />
        </FormControl>
        <FormControl className={ styles.input }>
          <FormLabel>Комментарии</FormLabel>
          <Input placeholder="Введите комментарий" onChange={ (value) => handleChangeInput(value, 'description') } />
        </FormControl>
        <FormControl className={ styles.input }>
          <FormLabel>Расписание</FormLabel>
          <Select
            placeholder="Выберете расписание"
            value={schedule}
            onChange={handleChangeSchedule}
            onOpen={handleGetSchedules}
          >
            {
              schedules.items.map((schedule) => (
                <MenuItem value={schedule.id}>
                  { schedule.name }
                </MenuItem>
              ))
            }
          </Select>
        </FormControl>
        <Button onClick={ handleCreateEntry }>Записаться</Button>
      </div>
    </div>
  );
});

export default Entry;
