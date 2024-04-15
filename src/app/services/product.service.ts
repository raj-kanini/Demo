import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  //product services
  daturl: string = `https://localhost:7041/api/Product`;
  getAllProduct(): Observable<any> {
    return this.http.get<any>(this.daturl);
  }
  addProduct(product: any): Observable<any> {
    return this.http.post<any>(this.daturl, product);
  }
  getProduct(id: number): Observable<any> {
    let url: string = `${this.daturl}/${id}`;
    return this.http.get<any>(url)
  }
  deleteProduct(id: number): Observable<any> {
    let url = `https://localhost:7041/api/Product/${id}`
    return this.http.delete<any>(url)
  }

  //Login services

  dataurl: string = `https://localhost:7041/api/Auth/Register`;
  registerUser(data: any): Observable<any> {
    return this.http.post<any>(this.dataurl, data)
  }

  loginUser(data: any): Observable<any> {
    const dataUrl = `https://localhost:7041/api/Auth/Login`;
    return this.http.post<any>(dataUrl, data)
  }

  //filter services
  getProductByCategory(category: string): Observable<any> {
    const dataUrl = `https://localhost:7041/api/Filter/category/${category}`
    return this.http.get<any>(dataUrl)
  }

  //cart Service

  getUserById(userId: any): Observable<any> {
    const dataurl = `https://localhost:7041/api/Cart/GetUser/${userId}`
    return this.http.get<any>(dataurl)
  }
  getProductById(productId: any): Observable<any> {
    const dataurl = `https://localhost:7041/api/Cart/GetProduct/${productId}`
    return this.http.get<any>(dataurl)
  }
  addToCart(data: any): Observable<any> {
    const dataurl = `https://localhost:7041/api/Cart/addToCart`
    return this.http.post<any>(dataurl, data)
  }
}
