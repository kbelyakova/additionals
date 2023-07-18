import { runInAction, makeAutoObservable } from "mobx";

import {
  _getAdditionals,
  _createAdditional,
  _deleteAdditional,
  _editAdditional,
  _getAdditionalsById,
} from '../api/additionals';

class Additionals {
  items = [];
  item = {
    age: '',
    description: '',
    scheduleId: '',
    userId: 'user',
  };
  selectedItem = {};

  constructor() {
    makeAutoObservable(this);
  }

  setItem = (value, type) => {
    this.item[type] = value;
  }

  setEditItem = (value,type) => {
    this.selectedItem[type] = value;
  }

  getAdditionals = async () => {
    const { data } = await _getAdditionals();

    runInAction(() => {
      this.items = data;
    });
  }

  getAdditionalById = async (id) => {
    const { data } = await _getAdditionalsById(id);

    runInAction(() => {
      this.selectedItem = data;
    });
  }

  createAdditional = async (id, schedule, name) => {
    try {
      await _createAdditional(id, schedule, name, this.item);
    } catch (err) {
      console.log(err);
    }
  }

  editAdditional = async (id, schedule, name) => {
    try {
      await _editAdditional(id, schedule, name, this.selectedItem);
    } catch (e) {
      console.log(e);
    }
  }

  deleteAdditional = async (id) => {
    try {
      await _deleteAdditional(id);
      await this.getAdditionals();
    } catch (err) {
      console.log(err);
    }
  }
}

export default new Additionals();