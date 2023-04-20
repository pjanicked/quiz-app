import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularngComponent } from './angularng/angularng.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CodingmcqComponent } from './codingmcq/codingmcq.component';
import { CsharpComponent } from './csharp/csharp.component';
import { DotnetcoreComponent } from './dotnetcore/dotnetcore.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GeneralComponent } from './general/general.component';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion'
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { QuestionboxComponent } from './questionbox/questionbox.component';
import { QuizboxComponent } from './quizbox/quizbox.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [									
    AppComponent,
    NavbarComponent,
    CsharpComponent,
    DotnetcoreComponent,
    AngularngComponent,
    QuestionboxComponent,
    HomeComponent,
    GeneralComponent,
    QuizboxComponent,
    CodingmcqComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
