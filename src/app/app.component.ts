import {Component, OnInit} from '@angular/core';
import {DocumentService} from './services/document.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Markdown Editor';
  sampleDocument = {
    _id: null,
    name: 'New Document',
    contents: '# MD Editor\n' +
    '## Getting started\n' +
    'You can start typing away or choose one of the documents from the sidenav\n' +
    '\n' +
    '## Usage\n' +
    'Please refer to [NGX Markdown](https://jfcere.github.io/ngx-markdown/) for complete functionality listing.\n' +
    '\n' +
    '### Examples\n' +
    'Inline `code` has `back-ticks around` it.\n' +
    '\n' +
    '```javascript\n' +
    'var s = "JavaScript syntax highlighting";\n' +
    'alert(s);\n' +
    '```\n' +
    '\n' +
    '```python\n' +
    's = "Python syntax highlighting"\n' +
    'print s\n' +
    '```\n'
  };
  documents: any;
  selectedDocument: {
    _id: any,
    name: string,
    contents: string
  };

  constructor(public documentService: DocumentService) {}

  /**
   * Init logic for root component (AppComponent).
   */
  ngOnInit() {
    this.getDocuments();
    // TODO: Externalize into separate text file for easier handling
    this.selectedDocument = this.sampleDocument;
  }

  /**
   * Function used to update editor with selected doc from list.
   * @param doc
   */
  passDocumentToEditor(doc) {
    this.selectedDocument = doc;
  }

  /**
   * Function for getting all documents from service.
   */
  getDocuments() {
    this.documentService.documents.take(1).subscribe(documents => {
      this.documents = documents;
    });
  }
}
