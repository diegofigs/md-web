import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
/**
 * DocumentService encapsulates all the business logic needed to
 * communicate with the Server API.
 */
export class DocumentService {
  api = 'http://localhost:4040/api';
  suffix = 'documents';
  documents: Observable<any>;

  constructor(public httpClient: HttpClient) {
    this.documents = this.getDocuments();
  }

  /**
   * Function for executing a GET request to the API.
   * @return {Observable<Object>}
   */
  getDocuments() {
    return this.httpClient.get(`${this.api}/${this.suffix}`);
  }

  /**
   * Function for executing a POST request to the API with a new document.
   * @param {Object} document New document to be created.
   * @return {Observable<Object>}
   */
  createDocument(document) {
    return this.httpClient.post(`${this.api}/${this.suffix}`, document)
      .do(() => this.documents = this.getDocuments());
  }

  /**
   * Function for executing a PUT request to the API with an updated document.
   * @param {Object} document Existing document to be updated.
   * @return {Observable<Object>}
   */
  updateDocument(document) {
    return this.httpClient.put(`${this.api}/${this.suffix}/${document._id}`, document)
      .do(() => this.documents = this.getDocuments());
  }

  /**
   * Function for executing a DELETE request to the API with a valid id.
   * @param {Object} id Unique string reference of the document to be deleted.
   * @return {Observable<Object>}
   */
  deleteDocument(id) {
    return this.httpClient.delete(`${this.api}/${this.suffix}/${id}`)
      .do(() => this.documents = this.getDocuments());
  }

}
