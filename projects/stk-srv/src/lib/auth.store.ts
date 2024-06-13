import { Injectable, WritableSignal, computed, signal } from '@angular/core';

export type UserAccessToken = {
  user: {
    id: number;
    username: string;
    email: string;
    role: string[];
  };
  accessToken: string;
};

@Injectable({
  providedIn: 'platform',
})
export class AuthStoreStore {
  #nullUAT: UserAccessToken = {
    user: { id: 0, username: '', email: '', role: [] },
    accessToken: '',
  };
  #uat: WritableSignal<UserAccessToken> = signal(this.#nullUAT);

  userAccessToken = this.#uat.asReadonly();
  accessToken = computed(() => this.userAccessToken().accessToken);
  user = computed(() => this.userAccessToken().user);

  login(userAccessToken: UserAccessToken) {
    this.#uat.set(userAccessToken);
  }
  logout() {
    this.#uat.set(this.#nullUAT);
  }
}
