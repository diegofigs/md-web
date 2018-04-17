import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { DocumentRoutingModule } from './document-routing.module';
import { DocumentListComponent } from './document-list/document-list.component';
import { DocumentEditorComponent } from './document-editor/document-editor.component';
import { DocumentCreateDialogComponent } from './document-create-dialog/document-create-dialog.component';
import { DocumentPreviewComponent } from './document-preview/document-preview.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DocumentRoutingModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
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
