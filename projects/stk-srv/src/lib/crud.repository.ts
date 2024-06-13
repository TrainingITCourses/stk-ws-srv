import { HttpClient } from '@angular/common/http';
import {
  EnvironmentProviders,
  Injectable,
  InjectionToken,
  inject,
  makeEnvironmentProviders,
} from '@angular/core';

export const API_URL_TOKEN = new InjectionToken<string>('API_URL');

@Injectable({
  providedIn: 'root',
})
export class CrudRepository {
  #http: HttpClient = inject(HttpClient);
  #apiUrl: string = inject<string>(API_URL_TOKEN);

  getAll<T>(resource: string) {
    const url = `${this.#apiUrl}/${resource}`;
    return this.#http.get<T[]>(url);
  }

  getById<T>(resource: string, id: number) {
    const url = `${this.#apiUrl}/${resource}/${id}`;
    return this.#http.get<T>(url);
  }

  getByQuery<T>(resource: string, query: string) {
    const url = `${this.#apiUrl}/${resource}?${query}`;
    return this.#http.get<T[]>(url);
  }

  post<T>(resource: string, data: T) {
    const url = `${this.#apiUrl}/${resource}`;
    return this.#http.post<T>(url, data);
  }

  put<T>(resource: string, id: number, data: T) {
    const url = `${this.#apiUrl}/${resource}/${id}`;
    return this.#http.put<T>(url, data);
  }

  delete<T>(resource: string, id: number) {
    const url = `${this.#apiUrl}/${resource}/${id}`;
    return this.#http.delete<T>(url);
  }
}

export function provideCrudRepository(apiUrl: string): EnvironmentProviders {
  return makeEnvironmentProviders([
    { provide: API_URL_TOKEN, useValue: apiUrl },
  ]);
}
