import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { MatDividerModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

import { DocumentRoutingModule } from './document-routing.module';
import { DocumentListComponent } from './document-list/document-list.component';
import { DocumentEditorComponent } from './document-editor/document-editor.component';
import { DocumentCreateDialogComponent } from './document-create-dialog/document-create-dialog.component';
import { DocumentPreviewComponent } from './document-preview/document-preview.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot(),
    DocumentRoutingModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  declarations: [DocumentListComponent, DocumentEditorComponent, DocumentCreateDialogComponent, DocumentPreviewComponent],
  entryComponents: [
    DocumentCreateDialogComponent
  ],
  exports: [
    DocumentListComponent,
    DocumentEditorComponent,
    DocumentPreviewComponent
  ]
})
export class DocumentModule { }
