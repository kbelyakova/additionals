import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@mui/material';

import courses from '../../store/courses';

import Header from '../../components/Header';

import styles from './index.module.css';

const Main = observer(() => {
  const router = useNavigate();

  useEffect(() => {
    courses.getCourses();
  }, []);

  const handleAddCourse = (id) => {
    router(`/entry/${id}`);
  };

  return (
    <div>
      <Header />
      <div className={ styles.courses }>
        <Typography variant="h5" component="div">Список курсов:</Typography>
        {
          courses.items.map((course) => (
            <Card sx={{ minWidth: 275 }} className={ styles.card }>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  { course.name }
                </Typography>
                <Typography variant="h5" component="div">
                  { course.description }
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  { course.teacher }
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={ () => handleAddCourse(course.id) }>Записаться</Button>
              </CardActions>
            </Card>
          ))
        }
      </div>
    </div>
  )
})

export default Main;
