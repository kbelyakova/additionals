import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

import styles from './index.module.css';

const Header = () => {
  const router = useNavigate();

  const handleGoMain = () => {
    router('/');
  }

  const handleGoAccount = () => {
    router('/account');
  }

  const handleGoCreateSchedule = () => {
    router('/schedule');
  }

  return (
    <div className={ styles.wrapper }>
      <Button
        variant="text"
        onClick={ handleGoMain }
      >Главная страница</Button>
      <Button
        variant="text"
        onClick={ handleGoAccount }
      >Аккаунт</Button>
      <Button
        variant="outlined"
        onClick={ handleGoCreateSchedule }
      >Создать расписание</Button>
    </div>
  );
};

export default Header;
