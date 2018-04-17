import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DocumentListComponent} from '../document-list/document-list.component';

@Component({
  selector: 'app-document-create-dialog',
  templateUrl: './document-create-dialog.component.html',
  styleUrls: ['./document-create-dialog.component.css']
})
export class DocumentCreateDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DocumentListComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
