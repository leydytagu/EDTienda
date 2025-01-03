import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { SignUpRequest } from '../interfaces/signup-request.interface';
import { SignUpResponse } from '../interfaces/signup-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  signUp(signUpData: SignUpRequest): Observable<SignUpResponse> {
    const url = `${this.baseUrl}/customers`;
    return this.http.post<SignUpResponse>(url, signUpData);
  }
}
