import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Document } from './document'
import { DocumentService } from './document.service';

@Component({
  selector: 'documents',
  templateUrl: 'documents.component.html',
  providers: [ DocumentService ]
})

export class DocumentsComponent implements OnInit {
  documents: Document[];
  errorMessage: string;

  constructor(
    private documentService: DocumentService
  ) {}

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getDocuments());
  }

  getDocuments() {
    this.documentService.getDocuments()
        .subscribe(
          documents => this.documents = documents,
          error => this.errorMessage = <any>error
        )
  }
}
