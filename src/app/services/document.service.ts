import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DocumentService {
  api = 'http://localhost:4040/api';
  suffix = 'documents';
  documents: Observable<any>;

  constructor(public httpClient: HttpClient) {
    this.documents = this.getDocuments();
  }

  getDocuments() {
    return this.httpClient.get(`${this.api}/${this.suffix}`);
  }

  createDocument(document) {
    return this.httpClient.post(`${this.api}/${this.suffix}`, document);
  }

}
