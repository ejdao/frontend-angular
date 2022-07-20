import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormsComponent implements OnInit {
  public myForm: any;

  constructor(private _fb: FormBuilder) {}

  public ngOnInit(): void {
    this.myForm = this._fb.group({
      text: ['', Validators.required],
    });
  }

  public onSubmit() {
    this.myForm.reset();
  }
}
