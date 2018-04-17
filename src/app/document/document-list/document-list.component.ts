import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../services/document.service';
import { MatDialog } from '@angular/material';
import {DocumentCreateDialogComponent} from '../document-create-dialog/document-create-dialog.component';


@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  documents: any;
  newDocument: any;
  constructor(public dialog: MatDialog, public documentService: DocumentService) { }

  ngOnInit() {
    this.documentService.documents.subscribe(documents => {
      this.documents = documents;
    });
    this.newDocument = {name: '', contents: ' '};
  }

  showCreateDialog() {
    const dialogRef = this.dialog.open(DocumentCreateDialogComponent, {
      width: '250px',
      data: this.newDocument
    });

    dialogRef.afterClosed().subscribe(result => {
      this.documentService.createDocument(result)
        .subscribe(document => {
          console.log(document);
        });
    });
  }
}
