import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
   SEARCH_LOGS
} from './types';
import axios from 'axios';

export const getLogs = () => async (dispatch) => {
  try {
    const res = await axios.get('/logs');
    dispatch({
      type: GET_LOGS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};
export const addLog = (log) => async (dispatch) => {
  try {
    const res = await axios.post('/logs', log, {
      headers: { 'Content-Type': 'application/json' },
    });
    dispatch({
      type: ADD_LOG,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

//DELETE LOGS FROM SERVER
export const deleteLog = (id) => async (dispatch) => {
  try {
    await axios.delete(`/logs/${id}`);
    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

//UPDATE CONTACTS.
export const updateLog = (log) => async (dispatch) => {
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };
  try {
    const res = await axios.put(`/logs/${log.id}`, log, config);
    dispatch({
      type: UPDATE_LOG,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};
export const searchLogs = (text) => async (dispatch) => {
    try {
      const res = await axios.get(`/logs?q=${text}`);
      dispatch({
        type: SEARCH_LOGS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.data,
      });
    }
  };
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};
