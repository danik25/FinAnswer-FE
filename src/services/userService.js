import { storageService } from "./storageService";

export const userService = {
  //query,
  // getUser,
  createUser,
  login, 
  //put,
  //remove,
};


async function login(userName, password) {
  // Check if user exists
  try {
    const response = await storageService.post('/users/login', {name: userName, password})

    if (response) {
      return true;
    }
  } catch(error) {
    throw error;
  }
}

async function createUser(userName, password) {
  try {
    const response = await storageService.post('/users/create', {name: userName, password});

    return response;
  } catch (error) {
    throw error;
  }
}
