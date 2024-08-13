import { Component } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent {

  showToast(toastElement: HTMLElement): void {
    const toast = new bootstrap.Toast(toastElement);
    toast.show();
  }
}
