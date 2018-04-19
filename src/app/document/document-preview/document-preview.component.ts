import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-document-preview',
  templateUrl: './document-preview.component.html',
  styleUrls: ['./document-preview.component.css']
})
export class DocumentPreviewComponent implements OnInit {

  @Input('changedDocument') changedDocument: any;
  constructor() { }

  ngOnInit() {
  }

}
