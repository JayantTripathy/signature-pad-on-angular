import {
  Component,
  ElementRef,
  VERSION,
  ViewChild,
  OnInit
} from "@angular/core";

import SignaturePad from "signature_pad";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  host: {
    '(keyup.ctrl.k)': 'clear()'
  }
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;

  @ViewChild("canvas", { static: true }) canvas: ElementRef;
  signpad: SignaturePad;
  signImage:any;
  ngOnInit() {
    this.signpad = new SignaturePad(this.canvas.nativeElement);
  }

/*It's work in devices*/
startSignPadDrawing(event: Event) {
  console.log(event);
}
/*It's work in devices*/
movedFinger(event: Event) {
}
/*Clean whole the signature*/
clearSignPad() {
  this.signpad.clear();
}
/*Here you can save the signature as a Image*/
saveSignPad() {
  const base64ImageData = this.signpad.toDataURL();
  this.signImage = base64ImageData;
}
  clear() {
    this.signpad.clear();
  }
}
