import { Component } from '@angular/core';

@Component({
    selector: 'dialog-basic-demo',
    templateUrl: './dialog-basic-demo.html'
})
export class DialogBasicDemo {
    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
}