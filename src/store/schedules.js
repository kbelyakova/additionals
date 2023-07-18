import { runInAction, makeAutoObservable } from "mobx";

import { _getScheduleByUser, _createSchedule, _getScheduleById } from '../api/schedules';

class Schedules {
  items = [];
  item = {
    name: '',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: '',
    userId: 'user',
  };
  selectedItem = {};

  constructor() {
    makeAutoObservable(this);
  }

  setItem = (value, type) => {
    this.item[type] = value;
  }

  getSchedulesByUser = async (user) => {
    const { data } = await _getScheduleByUser(user);

    runInAction(() => {
      this.items = data;
    });
  }

  getSchedulesById = async (id) => {
    const { data } = await _getScheduleById(id);

    runInAction(() => {
      this.selectedItem = data;
    });
  }

  createSchedule = async () => {
    try {
      await _createSchedule(this.item);
    } catch (err) {
      console.log(err);
    }
  }
}

export default new Schedules();