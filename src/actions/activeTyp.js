export const CHANGE_ACTIVE_TYPE = 'CHANGE_ACTIVE_TYPE';
export const SET_NAME_TYPE = 'SET_NAME_TYPE';

export const changeActiveType = item => ({
  type: CHANGE_ACTIVE_TYPE,
  item
});

export const setNameType = item => ({
  type: SET_NAME_TYPE,
  item
});
