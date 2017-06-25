import { Component, OnInit, } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { JournalEditComponent } from '../journal-edit/journal-edit.component';

@Component({
  selector: 'app-journal-detail',
  templateUrl: './journal-detail.component.html',
  styleUrls: ['./journal-detail.component.css']
})
export class JournalDetailComponent implements OnInit {
  
  id:string;
  journal:any;

  constructor(
    public firebaseService:FirebaseService,
    public modal: NgbModal,
    private router:Router,
    private route:ActivatedRoute
    ) { }

  ngOnInit() {
    //Get id
    this.id = this.route.snapshot.params['id'];
    this.firebaseService.user.subscribe(user=>{
      this.firebaseService.getJournal(this.id).subscribe( journal => {
        this.journal = journal;
        console.log(this.journal);
      });
    });
  }

  deleteJournal()
  {
      //todo: warning
      this.firebaseService.deleteJournal(this.id);
      this.router.navigate(['/journal-list']);
  }

  editJournal()
  {
      const modalRef = this.modal.open(JournalEditComponent);
      modalRef.componentInstance.journal = this.journal;
      modalRef.componentInstance.isNew = false;
      modalRef.result.then((result)=>{
        this.firebaseService.getJournal(this.id).subscribe( journal => {
          this.journal = journal;
        });
      });
  }

}
