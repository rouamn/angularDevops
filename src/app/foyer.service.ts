import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FoyerService {
  private baseUrl = 'http://192.168.1.19:8083'; // Assuming your backend API is running at this URL

  constructor(private http: HttpClient) { }

  findAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/foyer/findAll`);
  }

  addFoyer(foyer: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/foyer/add`, foyer);
  }

  updateFoyer(foyer: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/foyer/update`, foyer);
  }

  deleteFoyer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/foyer/delete/${id}`);
  }

  findById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/foyer/${id}`);
  }

  searchFoyersByNomFoyer(nomFoyer: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/foyer/search/${nomFoyer}`);
  }
}
