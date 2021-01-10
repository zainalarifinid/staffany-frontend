import axios from 'axios';

const API_URL = process.env.API_URL;

export async function getListShift() {
  const url = `${API_URL}/shifts`;
  return axios({ url,
    method: 'get',
  }).then(response => response.data).catch((err) => {
    throw err.response;
  });
}

export async function createShift(shift) {
  const url = `${API_URL}/shifts`;
  return axios({ url,
    method: 'post',
    data: shift,
  }).then(response => response.data).catch((err) => {
    throw err.response;
  });
}

export async function updateShift(idShift, shift) {
  const url = `${API_URL}/shifts/${idShift}`;
  return axios({ url,
    method: 'put',
    data: shift,
  }).then(response => response.data).catch((err) => {
    throw err.response;
  });
}

export async function deleteShift(idShift) {
  const url = `${API_URL}/shifts/${idShift}`;
  return axios({ url,
    method: 'delete',
  }).then(response => response.data).catch((err) => {
    throw err.response;
  });
}
