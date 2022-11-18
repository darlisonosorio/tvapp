import { api } from './index';
import { SERVER_URL } from "@env";

export default class BaseProvider<T, S> {
  path: string;

  constructor(path) {
    this.path = path;
  }

  async list(params = {}) {
    try {
      const result = await api.get<T[]>(this.path, { params });
      return result.data;
    } catch(e) {
      return this.errorHandling(e);
    }
  }

  async search(params = {}) {
    try {
      const result = await api.get<S[]>(`/search${this.path}`, { params });
      return result.data;
    } catch(e) {
      return this.errorHandling(e);
    }
  }

  async get(id: any) {
    try {
      const result = await api.get<T[]>(`${this.path}/${id}`);
      return result.data;
    } catch(e) {
      throw this.errorHandling(e);
    }
  };

  errorHandling(error) {
    console.log(JSON.stringify(error.message), SERVER_URL);
    if (error.response) {
      if (error.response.status === 400) {
        throw Error('Incorrect data');
      }
      if (error.response.status === 401 ||
          error.response.status === 403) {
        throw Error('Forbidden content');
      }
      if (error.response.status === 404) {
        throw Error('Content not found');
      }
    }
    throw Error('Server error');
  }

}