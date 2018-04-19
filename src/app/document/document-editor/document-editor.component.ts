import {Component, Input, OnInit} from '@angular/core';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-document-editor',
  templateUrl: './document-editor.component.html',
  styleUrls: ['./document-editor.component.css']
})
export class DocumentEditorComponent implements OnInit {

  @Input('selectedDocument') selectedDocument: any;
  constructor() {}

  ngOnInit() {
  }

}
