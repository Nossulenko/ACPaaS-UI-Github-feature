import { Component } from '@angular/core';
import { DiffEditorModel } from 'ngx-monaco-editor';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  editorOptions = {theme: 'vs-dark', language: 'javascript'};
  code = 'function x() {\nconsole.log("Hello world!");\n}';

    options = {
      theme: 'vs-dark'
    };
    originalModel: DiffEditorModel = {
      code: 'heLLo world!',
      language: 'text/plain'
    };

    modifiedModel: DiffEditorModel = {
      code: 'hello orlando!',
      language: 'text/plain'
    };
  }


