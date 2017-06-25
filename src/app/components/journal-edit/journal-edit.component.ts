import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-journal-edit',
  templateUrl: './journal-edit.component.html',
  styleUrls: ['./journal-edit.component.css']
})
export class JournalEditComponent implements OnInit {

  countries: any[];
  @Input() journal: any;
  @Input() isNew: boolean;

  constructor(public firebaseService:FirebaseService,
              public activeModal: NgbActiveModal) { 
  }

  ngOnInit() {
    this.firebaseService.countries.subscribe(countries=>{
      this.countries = countries;
    })
  }

  submitClicked() {
    console.log(this.journal);
    if(this.isNew)
    {
      this.firebaseService.addJournal(this.journal);
    }
    else
    {
      this.firebaseService.editJournal(this.journal.$key, this.journal)
    }
    this.activeModal.close();
  }

}
