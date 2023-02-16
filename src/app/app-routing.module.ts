import { EditTestCaseComponent } from './admin-gestion/testCase/edit-test-case/edit-test-case.component';
import { TestCaseProjectComponent } from './project-test/test-case-project/test-case-project.component';
import { EditProfileComponent } from './admin-gestion/liste-profile/edit-profile/edit-profile.component';
import { AddProfileComponent } from './admin-gestion/add-profile/add-profile.component';
import { ProjectComponent } from './project-test/project/project.component';
import { ListProjetComponent } from './admin-gestion/list-projet/list-projet.component';
import { ListeProfileComponent } from './admin-gestion/liste-profile/profile-liste/liste-profile.component';
import { SharedComponentComponent } from './shared-component/shared-component.component';
import { LoginComponent } from './login/login.component';
import { GestionProjetComponent } from './admin-gestion/gestion-projet/gestion-projet.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeProfileContainerComponent } from './admin-gestion/liste-profile/liste-profile-container/liste-profile-container.component';
import { AddTestCaseComponent } from './admin-gestion/testCase/add-test-case/add-test-case.component';
import { ListTestCaseComponent } from './admin-gestion/testCase/list-test-case/list-test-case.component';
import { ListeTestContainerComponent } from './admin-gestion/testCase/liste-test-container/liste-test-container.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch : 'full' },

  { path: 'login', component : LoginComponent },
  { path: 'home', component : SharedComponentComponent, children : [
    { path: 'addProfile', component : AddProfileComponent },
    { path: 'gestionProjet', component : GestionProjetComponent },
    { path: 'listProfil', component : ListeProfileContainerComponent, children : [
      { path: '', component : ListeProfileComponent },
      { path: 'editProfil/:id', component : EditProfileComponent }
     ] },

    { path: 'listProjet', component : ListProjetComponent },
    { path: 'listeTestCase', component : ListeTestContainerComponent , children : [
      { path: '', component : ListTestCaseComponent },
      { path: 'editTest/:id', component : EditTestCaseComponent }
     ] },
    { path: 'addTestCase', component : AddTestCaseComponent },
    { path: 'testProjet', component : ProjectComponent },
    { path: 'testCaseP/:id', component : TestCaseProjectComponent }




   ] }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
