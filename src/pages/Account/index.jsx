import React, { useEffect, useState } from 'react';
import { Typography, Card, Button, CardContent, CardActions } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useNavigate } from "react-router-dom";

import additionals from '../../store/additionals';
import schedules from '../../store/schedules';

import Header from '../../components/Header';

import styles from './index.module.css';

const Account = observer(() => {
  const router = useNavigate();

  useEffect(() => {
    additionals.getAdditionals();
    schedules.getSchedulesByUser('user');
  }, []);

  const handleDelete = (id) => {
    additionals.deleteAdditional(id);
  };

  const handleEdit = (id) => {
    router(`/edit-additional/${id}`);
  };

  const renderAdditionalsList = () => additionals.items.map((additional) => {
    return (
      <Card sx={{ minWidth: 275 }} className={ styles.card }>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Название курса: { additional.name }
          </Typography>
          <Typography variant="h5" component="div">
            Возраст: { additional.age }
          </Typography>
          <Typography variant="h5" component="div">
            Описание: { additional.description }
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={ () => handleDelete(additional.id) }>Удалить запись</Button>
          <Button size="small" onClick={ () => handleEdit(additional.id) }>Редактировать запись</Button>
        </CardActions>
      </Card>
    )
  });

  const renderSchedules = () => schedules.items.map((schedule) => {
    return (
      <Card sx={{ minWidth: 275 }} className={ styles.card }>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Название расписания: { schedule.name }
          </Typography>
          {
            schedule.monday ? (
              <Typography sx={{ fontSize: 14 }}>
                Понедельник: { schedule.monday }
              </Typography>
            ) : null
          }
          {
            schedule.tuesday ? (
              <Typography sx={{ fontSize: 14 }}>
                Вторник: { schedule.tuesday }
              </Typography>
            ) : null
          }
          {
            schedule.wednesday ? (
              <Typography sx={{ fontSize: 14 }}>
                Среда: { schedule.wednesday }
              </Typography>
            ) : null
          }
          {
            schedule.thursday ? (
              <Typography sx={{ fontSize: 14 }}>
                Четверг: { schedule.thursday }
              </Typography>
            ) : null
          }
          {
            schedule.friday ? (
              <Typography sx={{ fontSize: 14 }}>
                Пятница: { schedule.friday }
              </Typography>
            ) : null
          }
          {
            schedule.saturday ? (
              <Typography sx={{ fontSize: 14 }}>
                Суббота: { schedule.saturday }
              </Typography>
            ) : null
          }
          {
            schedule.sunday ? (
              <Typography sx={{ fontSize: 14 }}>
                Воскресенье: { schedule.sunday }
              </Typography>
            ) : null
          }
        </CardContent>
      </Card>
    )
  });

  return (
    <div>
      <Header />
      <div className={ styles.wrapper }>
        <Typography variant="h5" component="div">Записи на курсы:</Typography>
        { renderAdditionalsList() }
        <Typography variant="h5" component="div">Расписания:</Typography>
        { renderSchedules() }
      </div>
    </div>
  );
});

export default Account;
