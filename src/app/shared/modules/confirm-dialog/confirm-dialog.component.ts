import { ChangeDetectionStrategy, Component, HostListener, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: {
      cancelText: string,
      confirmText: string,
      message: string,
      title: string
    },
    private mdDialogRef: MatDialogRef<ConfirmDialogComponent>
  ) { }

  @HostListener("keydown.esc")
  onEsc() {
    this.close(false);
  }

  cancel() {
    this.close(false);
  }

  close(value: boolean) {
    this.mdDialogRef.close(value);
  }

  confirm() {
    this.close(true);
  }

}
