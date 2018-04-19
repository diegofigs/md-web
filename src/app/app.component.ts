import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Markdown Editor';
  selectedDocument = {
    name: 'New Document\n',
    contents: '# MD Editor\n' +
    '## Getting started\n' +
    'You can start typing away or choose one of the documents from the sidenav\n'
  };

  passDocumentToEditor(doc) {
    this.selectedDocument = doc;
  }
}
