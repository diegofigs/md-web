import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DocumentListComponent} from '../document-list/document-list.component';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-document-create-dialog',
  templateUrl: './document-create-dialog.component.html',
  styleUrls: ['./document-create-dialog.component.css']
})
export class DocumentCreateDialogComponent implements OnInit {
  name = new FormControl('', [Validators.required]);

  constructor(public dialogRef: MatDialogRef<DocumentListComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
