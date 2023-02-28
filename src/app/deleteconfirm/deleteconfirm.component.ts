import { Component,EventEmitter,Input, OnInit ,Output} from '@angular/core';

@Component({
  selector: 'app-deleteconfirm',
  templateUrl: './deleteconfirm.component.html',
  styleUrls: ['./deleteconfirm.component.css']
})
export class DeleteconfirmComponent implements OnInit {

  @Input() item : string | undefined
  @Output() cancel = new EventEmitter

  constructor(){ }
  ngOnInit(): void {
      
  }

  oncancel(){
    this.cancel.emit()
  }

}
