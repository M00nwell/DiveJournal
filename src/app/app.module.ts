import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FirebaseService } from './services/firebase.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { JournalListComponent } from './components/journal-list/journal-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MapComponent } from './components/map/map.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { JournalDetailComponent } from './components/journal-detail/journal-detail.component';
import { JournalEditComponent } from './components/journal-edit/journal-edit.component';

const appRoutes:Routes = [
  {path:'', component:HomeComponent},
  {path:'journal-list', component:JournalListComponent},
  {path:'journal/:id', component:JournalDetailComponent},
  {path:'map', component:MapComponent},
  {path:'**', redirectTo:'', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JournalListComponent,
    NavBarComponent,
    MapComponent,
    SignUpComponent,
    JournalDetailComponent,
    JournalEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot()
  ],
  providers: [FirebaseService],
  entryComponents: [JournalEditComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
