import { Component, Input } from '@angular/core';
import {ContactModel} from 'src/app/models/contact-details.model';
@Component({
  selector: 'app-contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent {
  @Input() user? : ContactModel;
}
