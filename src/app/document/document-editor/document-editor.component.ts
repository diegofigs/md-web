import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/debounceTime';
import {DocumentService} from '../../services/document.service';

@Component({
  selector: 'app-document-editor',
  templateUrl: './document-editor.component.html',
  styleUrls: ['./document-editor.component.css']
})
export class DocumentEditorComponent implements OnInit {

  @Input('selectedDocument') selectedDocument: any;
  @Output('documentSaved') documentSaved = new EventEmitter<any>();
  constructor(public documentService: DocumentService) {}

  ngOnInit() {}

  /**
   * Function that calls DocumentService to update the selected doc.
   * @return {Subscription}
   */
  requestUpdate() {
    return this.documentService.updateDocument(this.selectedDocument)
      .take(1)
      .subscribe((updatedDocument) => {
        this.selectedDocument = updatedDocument;
        this.documentSaved.emit(updatedDocument);
      });
  }

  /**
   * Function that calls DocumentService to save the selected doc.
   * @return {Subscription}
   */
  requestSave() {
    return this.documentService.createDocument(this.selectedDocument)
      .take(1)
      .subscribe((updatedDocument) => {
        this.selectedDocument = updatedDocument;
        this.documentSaved.emit(updatedDocument);
      });
  }

  /**
   * Function that calls DocumentService to delete the selected doc.
   * @return {Subscription}
   */
  requestDelete() {
    return this.documentService.deleteDocument(this.selectedDocument._id)
      .subscribe((deletedDocument) => {
        this.selectedDocument = {};
        this.documentSaved.emit(deletedDocument);
      });
  }
}
