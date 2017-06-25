import { Component, OnInit, Optional } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { JournalEditComponent } from '../journal-edit/journal-edit.component';

@Component({
  selector: 'app-journal-list',
  templateUrl: './journal-list.component.html',
  styleUrls: ['./journal-list.component.css']
})
export class JournalListComponent implements OnInit {

  journals : any;
  journal: any = {
            "diveNo" : 1,
            "country" : "",
            "location" : "",
            "date" : "2014-10-19"
  }

  constructor(public modal: NgbModal,
              public firebaseService:FirebaseService) { }

  ngOnInit() {
    this.firebaseService.user.subscribe(user=>{
      this.firebaseService.getJournals().subscribe(journals =>{
        console.log(journals);
        this.journals = journals;
      })
    })   
  }

  newJournal(){
		const modalRef = this.modal.open(JournalEditComponent);
    modalRef.componentInstance.journal = this.journal;
    modalRef.componentInstance.isNew = true;
    modalRef.result.then((result)=>{
      this.firebaseService.getJournals().subscribe(journals =>{
        console.log(journals);
        this.journals = journals;
      })
    });
	}

}
