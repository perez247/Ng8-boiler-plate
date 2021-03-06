import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-validator-error-message',
  templateUrl: './validator-error-message.component.html',
  styleUrls: ['./validator-error-message.component.scss']
})
export class ValidatorErrorMessageComponent implements OnInit {

  // The form to manipulate
  @Input() form: FormGroup;

  // The form field to manipulate
  @Input() field: string;

  start = false;

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngDoCheck(): void {}

}
