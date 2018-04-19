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

  documents: any;
  @Output() onSelect = new EventEmitter<any>();
  constructor(public dialog: MatDialog, public documentService: DocumentService) { }

  ngOnInit() {
    this.getDocuments();
  }

  getDocuments() {
    this.documentService.documents.take(1).subscribe(documents => {
      this.documents = documents;
    });
  }

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
          .subscribe(document => {
            this.selectDocument(document);
            this.getDocuments();
          });
      }
    });
  }

  selectDocument(document) {
    this.onSelect.emit(document);
  }
}
