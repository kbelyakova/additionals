import React from 'react';
import { Typography, Input, Button, FormControl, FormLabel } from '@mui/material';
import InputMask from 'react-input-mask';
import { useNavigate } from "react-router-dom";

import schedules from '../../store/schedules';

import Header from '../../components/Header';

import styles from './index.module.css';

const FIELDS = [
  {
    label: 'Понедельник:',
    value: 'monday',
  },
  {
    label: 'Вторник:',
    value: 'tuesday',
  },
  {
    label: 'Среда:',
    value: 'wednesday',
  },
  {
    label: 'Четверг:',
    value: 'thursday',
  },
  {
    label: 'Пятница:',
    value: 'friday',
  },
  {
    label: 'Суббота:',
    value: 'saturday',
  },
  {
    label: 'Воскресенье:',
    value: 'sunday',
  },
]

const CreateSchedule = () => {
  const router = useNavigate();

  const handleChangeInput = (value, type) => {
    schedules.setItem(value.target.value, type);
  };

  const handleCreateSchedule = () => {
    schedules.createSchedule();

    router('/account');
  };

  return (
    <div>
      <Header />
      <div className={ styles.wrapper }>
        <Typography variant="h5" component="div">Создание расписания:</Typography>
        <div>
          <FormControl className={ styles.input }>
            <FormLabel>Название расписания</FormLabel>
            <Input placeholder="Введите название" onChange={ (value) => handleChangeInput(value, 'name') } />
          </FormControl>
          {
            FIELDS.map((field) => (
              <div className={ styles.row }>
                <Typography sx={{ fontSize: 16 }}>{ field.label }</Typography>
                <div>
                  <InputMask mask="99-99" onChange={ (value) => handleChangeInput(value, field.value) } />
                </div>
              </div>
            ))
          }
          <Button onClick={ handleCreateSchedule }>Создать</Button>
        </div>
      </div>
    </div>
  );
};

export default CreateSchedule;
