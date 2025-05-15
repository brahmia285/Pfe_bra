import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


import { User } from '../models/auth.models';

import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })

export class UserProfileService {


    private apiUrl = 'http://localhost:8080/auth'; // à adapter selon ton endpoint


    constructor(private http: HttpClient) { }


    login(data: any): Observable<any> {

        return this.http.post(`${this.apiUrl}/login`, data);

    }

    getAll() {

        return this.http.get<User[]>(`/api/login`);

    }


    register(user: User) {

        return this.http.post(`/users/register`, user);

    }

}