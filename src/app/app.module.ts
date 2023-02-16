import { NgxSpinnerModule } from 'ngx-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SharedComponentComponent } from './shared-component/shared-component.component';
import { ProjectComponent } from './project-test/project/project.component';
import { GestionProjetComponent } from './admin-gestion/gestion-projet/gestion-projet.component';
import { ListeProfileComponent } from './admin-gestion/liste-profile/profile-liste/liste-profile.component';
import { ListProjetComponent } from './admin-gestion/list-projet/list-projet.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { authInterceptorProviders } from './interceptor/auth.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddProfileComponent } from './admin-gestion/add-profile/add-profile.component';

import { EditProfileComponent } from './admin-gestion/liste-profile/edit-profile/edit-profile.component';
import { ListeProfileContainerComponent } from './admin-gestion/liste-profile/liste-profile-container/liste-profile-container.component';
import { EditTestCaseComponent } from './admin-gestion/testCase/edit-test-case/edit-test-case.component';
import { AddTestCaseComponent } from './admin-gestion/testCase/add-test-case/add-test-case.component';
import { ListTestCaseComponent } from './admin-gestion/testCase/list-test-case/list-test-case.component';
import { TestCaseProjectComponent } from './project-test/test-case-project/test-case-project.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { ToastrModule } from 'ngx-toastr';
import { ListeTestContainerComponent } from './admin-gestion/testCase/liste-test-container/liste-test-container.component';
import { SearchNamePipe } from './search-name.pipe';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SharedComponentComponent,
    ProjectComponent,
    GestionProjetComponent,
    ListeProfileComponent,
    ListProjetComponent,
    AddProfileComponent,
    EditProfileComponent,
    ListeProfileContainerComponent,
    EditTestCaseComponent,
    AddTestCaseComponent,
    ListTestCaseComponent,
    TestCaseProjectComponent,
    ListeTestContainerComponent,
    SearchNamePipe,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    NgxMatDatetimePickerModule, 
    NgxMatTimepickerModule,
    ToastrModule.forRoot(({
      positionClass: 'toast-bottom-full-width',
    }),),
    BrowserAnimationsModule,
    NgxSpinnerModule
    
   
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
