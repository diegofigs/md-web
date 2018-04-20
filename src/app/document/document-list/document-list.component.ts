import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { DocumentService } from '../../services/document.service';
import { MatDialog } from '@angular/material';
import {DocumentCreateDialogComponent} from '../document-create-dialog/document-create-dialog.component';
import 'rxjs/add/operator/take';


@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  @Input('documents') documents: any;
  @Input('selectedDocument') selectedDocument: any;
  @Output('documentSelect') documentSelect = new EventEmitter<any>();
  @Output('documentCreated') documentCreated = new EventEmitter<any>();
  constructor(public dialog: MatDialog, public documentService: DocumentService) { }

  ngOnInit() {}

  /**
   * Function for displaying document creation dialog.
   */
  showCreateDialog() {
    const newDocument = {name: '', contents: ' '};
    const dialogRef = this.dialog.open(DocumentCreateDialogComponent, {
      width: '250px',
      data: newDocument
    });

    dialogRef.afterClosed().subscribe(name => {
      if (name) {
        newDocument.name = name;
        this.documentService.createDocument(newDocument)
          .take(1)
          .subscribe(document => {
            this.selectDocument(document);
            this.documentCreated.emit(document);
          });
      }
    });
  }

  /**
   * Function for selecting a document to edit from the list.
   * @param document
   */
  selectDocument(document) {
    this.selectedDocument = document;
    this.documentSelect.emit(document);
  }
}
