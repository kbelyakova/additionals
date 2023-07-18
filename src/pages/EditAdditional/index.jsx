import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { observer } from 'mobx-react-lite';
import { FormControl, FormLabel, Input, Button, Select, MenuItem, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";

import additionals from '../../store/additionals';
import schedules from '../../store/schedules';
import courses from '../../store/courses';

import Header from '../../components/Header';

import styles from './index.module.css';

const EditAdditional = observer(() => {
  const router = useNavigate();
  const params = useParams();

  const [schedule, setSchedule] = useState(null);
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  useEffect(() => {
    schedules.getSchedulesByUser('user');
    additionals.getAdditionalById(params.id);
  }, []);

  useEffect(() => {
    schedules.getSchedulesById(additionals.selectedItem.scheduleId);
    setSelectedSchedule(schedules.selectedItem);
  }, [additionals.selectedItem]);

  useEffect(() => {
    setSchedule(schedules.selectedItem.id);
  }, [selectedSchedule, schedules.selectedItem]);

  const handleEditEntry = () => {
    additionals.editAdditional(params.id, schedule, courses.item.name, additionals.selectedItem);
    router('/account');
  };

  const handleChangeInput = (value, type) => {
    additionals.setEditItem(value.target.value, type);
  };

  const handleChangeSchedule = (value) => {
    setSchedule(value.target.value);
  };

  const handleGetSchedules = () => {
    schedules.getSchedulesByUser('user');
  };

  return (
    <div>
      <Header />
      <div className={ styles.form }>
        <Typography variant="h5" component="div">Редактирование записи:</Typography>
        <FormControl className={ styles.input }>
          <FormLabel>Возраст</FormLabel>
          <Input value={ additionals.selectedItem.age } placeholder="Введите возраст" onChange={ (value) => handleChangeInput(value, 'age') } />
        </FormControl>
        <FormControl className={ styles.input }>
          <FormLabel>Комментарии</FormLabel>
          <Input value={ additionals.selectedItem.description } placeholder="Введите комментарий" onChange={ (value) => handleChangeInput(value, 'description') } />
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
        <Button onClick={ handleEditEntry }>Редактировать</Button>
      </div>
    </div>
  )
});

export default EditAdditional;
