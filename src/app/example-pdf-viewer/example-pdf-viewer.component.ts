import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  NgxExtendedPdfViewerService,
  pdfDefaultOptions,
} from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-example-pdf-viewer',
  templateUrl: './example-pdf-viewer.component.html',
  styleUrls: ['./example-pdf-viewer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExamplePdfViewerComponent {
  formData: { [key: string]: string | number | boolean | string[] | null } = {};
  get jsonData(): any {
    return JSON.stringify(this.formData, null, 2);
  }

  set jsonData(value: any) {
    try {
      this.formData = JSON.parse(value);
    } catch (e) {
      // Handle the error if the JSON is invalid
      console.error('Invalid JSON:', e);
    }
  }

  public src = './assets/FormattedTest.pdf';
  constructor(private pdfService: NgxExtendedPdfViewerService) {
    pdfDefaultOptions.doubleTapZoomFactor = '150%';
    pdfDefaultOptions.maxCanvasPixels = 4096 * 4096 * 5;
    pdfDefaultOptions.assetsFolder = 'assets';
  }


}
