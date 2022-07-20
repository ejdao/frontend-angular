import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'eda-modal',
  templateUrl: './modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EdaModalComponent {
  constructor(
    private _dialogRef: MatDialogRef<EdaModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  public onCancel(): void {
    this._dialogRef.close(false);
  }

  public onConfirm(): void {
    this._dialogRef.close(true);
  }

  public onClose(): void {
    this._dialogRef.close(true);
  }
}
