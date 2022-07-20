import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-cards-and-boxes',
  templateUrl: './cards-and-boxes.component.html',
  styleUrls: ['./cards-and-boxes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsAndBoxesComponent implements OnInit {
  public myForm: any;
  public loading: boolean = false;

  constructor(
    private _fb: FormBuilder,
    private _cd: ChangeDetectorRef,
    private _toast: ToastService
  ) {}

  public ngOnInit(): void {
    this.myForm = this._fb.group({
      text: ['', Validators.required],
    });
  }

  public onSubmit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this._cd.markForCheck();
      this._toast.notification('Data has been loaded');
      this.myForm.reset();
    }, 3000);
  }
}
