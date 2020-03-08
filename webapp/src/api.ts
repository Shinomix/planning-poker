import fetch from 'cross-fetch';

const TASKS_MANAGER_URL: string = 'http://localhost:3000';

const createTask = async () => {
  try {
    const rawResponse = await fetch(TASKS_MANAGER_URL + '/tasks', {
      method: 'POST',
      body: '',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    return await rawResponse.json();
  }
  catch (e) {
    console.log('API - createTask - An error occured', e);

    return {};
  }
}

const createUser = async (taskId: string) => {
  try {
    const rawResponse = await fetch(TASKS_MANAGER_URL + `/tasks/${taskId}/user`, {
      method: 'POST',
      body: '',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    return await rawResponse.json();
  }
  catch (e) {
    console.log('API - createUser - An error occured', e);

    return {};
  }
}

const vote = async (taskId: string, userId: string, value: number) => {
  try {
    const rawResponse = await fetch(TASKS_MANAGER_URL + `/tasks/${taskId}/vote`, {
      method: 'POST',
      body: JSON.stringify({
        user_id: userId,
        value
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    return await rawResponse.json();
  }
  catch (e) {
    console.log('API - createUser - An error occured', e);

    return {};
  }
}

export { createTask, createUser, vote }