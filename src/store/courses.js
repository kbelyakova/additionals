import { runInAction, makeAutoObservable } from "mobx";

import { _getCourses, _getCourseById } from '../api/courses';

class Courses {
  items = [];
  item = {};

  constructor() {
    makeAutoObservable(this);
  }

  getCourses = async () => {
    const { data } = await _getCourses();

    runInAction(() => {
      this.items = data;
    });
  }

  getCourseById = async (id) => {
    const { data } = await _getCourseById(id);

    runInAction(() => {
      this.item = data;
    });
  }
}

export default new Courses();