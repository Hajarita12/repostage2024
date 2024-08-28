import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { HomeComponent } from './home/home.component';
import { EspaceAdminComponent } from './espace-admin/espace-admin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginCommercialComponent } from './login-commercial/login-commercial.component';
import { EspaceCommercialComponent } from './espace-commercial/espace-commercial.component';
import { AddAssistantComponent } from './add-assistant/add-assistant.component';
import { LoginAssistantComponent } from './login-assistant/login-assistant.component';
import { EspaceAssistantComponent } from './espace-assistant/espace-assistant.component';
import { ResetPasswordCommercialComponent } from './reset-password-commercial/reset-password-commercial.component';
import { ResetPasswordAdvComponent } from './reset-password-adv/reset-password-adv.component';
import { ResetProfilCommercialComponent } from './reset-profil-commercial/reset-profil-commercial.component';
import { ShowInfoCommercialComponent } from './show-info-commercial/show-info-commercial.component';
import { CommercialSidebarComponent } from './commercial-sidebar/commercial-sidebar.component';
import { EspaceFinalCommercialComponent } from './espace-final-commercial/espace-final-commercial.component';
import { AddProspectWithSidebarComponent } from './add-prospect-with-sidebar/add-prospect-with-sidebar.component';
import { EspaceAssistantWithSidebarComponent } from './espace-assistant-with-sidebar/espace-assistant-with-sidebar.component';
import { AssistantSidebarComponent } from './assistant-sidebar/assistant-sidebar.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { AddAssitantSidebarComponent } from './add-assitant-sidebar/add-assitant-sidebar.component';
import { AddCommercialSidebarComponent } from './add-commercial-sidebar/add-commercial-sidebar.component';
import { SetProfilComSidebarComponent } from './set-profil-com-sidebar/set-profil-com-sidebar.component';
import { SetProfilAssistantSidebarComponent } from './set-profil-assistant-sidebar/set-profil-assistant-sidebar.component';
import { SetProfilAssistantComponent } from './set-profil-assistant/set-profil-assistant.component';
import { LoginTemplateComponent } from './login-template/login-template.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { AddArticleSidebarComponent } from './add-article-sidebar/add-article-sidebar.component';
import { CrudArticleComponent } from './crud-article/crud-article.component';
import { CrudArticleSideComponent } from './crud-article-side/crud-article-side.component';
import { AddDevisComponent } from './add-devis/add-devis.component';
import { GestionDevisComponent } from './gestion-devis/gestion-devis.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SuccessModalComponent } from './success-modal/success-modal.component';
import { ModalErrorQuantityArticleComponent } from './modal-error-quantity-article/modal-error-quantity-article.component';
import { ValidationDevisComponent } from './validation-devis/validation-devis.component';
import { ValidationDevisSideComponent } from './validation-devis-side/validation-devis-side.component';
import { ModalAddProspectComponent } from './modal-add-prospect/modal-add-prospect.component';
import { ModalAddCommercialComponent } from './modal-add-commercial/modal-add-commercial.component';
import { ModalAddAssistantComponent } from './modal-add-assistant/modal-add-assistant.component';
import { CrudDevisEnattenteComponent } from './crud-devis-enattente/crud-devis-enattente.component';
import { ModalDevisDetailsComponent } from './modal-devis-details/modal-devis-details.component';
import { ConfirmationModalDevisComponent } from './confirmation-modal-devis/confirmation-modal-devis.component';
import { EditModalDevisComponent } from './edit-modal-devis/edit-modal-devis.component';
import { CrudDevisSideComponent } from './crud-devis-side/crud-devis-side.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EditModalDevisAssiComponent } from './edit-modal-devis-assi/edit-modal-devis-assi.component';
import { ConfirmationModalArticleComponent } from './confirmation-modal-article/confirmation-modal-article.component';
import { CrudProspectComComponent } from './crud-prospect-com/crud-prospect-com.component';
import { EditProspectModalComComponent } from './edit-prospect-modal-com/edit-prospect-modal-com.component';
import { ConfimationModalProspectComponent } from './confimation-modal-prospect/confimation-modal-prospect.component';
import { CrudProspectComsideComponent } from './crud-prospect-comside/crud-prospect-comside.component';
import { AddProspectModalComponent } from './add-prospect-modal/add-prospect-modal.component';
import { AddDevisModalComponent } from './add-devis-modal/add-devis-modal.component';
import { CrudCommercialComponent } from './crud-commercial/crud-commercial.component';
import { CrudCommercialSideComponent } from './crud-commercial-side/crud-commercial-side.component';
import { ConfirmationModalCommercialComponent } from './confirmation-modal-commercial/confirmation-modal-commercial.component';
import { SuccessModalAddcomComponent } from './success-modal-addcom/success-modal-addcom.component';
import { EditCommercialModalComponent } from './edit-commercial-modal/edit-commercial-modal.component';
import { CrudAssistantComponent } from './crud-assistant/crud-assistant.component';
import { CrudAssistantSideComponent } from './crud-assistant-side/crud-assistant-side.component';
import { ConfirmationModalAssistantComponent } from './confirmation-modal-assistant/confirmation-modal-assistant.component';
import { EditAssistantModalComponent } from './edit-assistant-modal/edit-assistant-modal.component';
import { ProdVendusComponent } from './prod-vendus/prod-vendus.component';
import { ChartsModule } from 'ng2-charts';
import { ChartArticlesVendusComponent } from './chart-articles-vendus/chart-articles-vendus.component';
import { ArticlePourcentageDevisComponent } from './article-pourcentage-devis/article-pourcentage-devis.component';
import { PerformanceCommerciauxComponent } from './performance-commerciaux/performance-commerciaux.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { CrudCategorieComponent } from './crud-categorie/crud-categorie.component';
import { EditCategorieComponent } from './edit-categorie/edit-categorie.component';
import { ConfirmationModalCategorieComponent } from './confirmation-modal-categorie/confirmation-modal-categorie.component';
import { CrudCategorieSideComponent } from './crud-categorie-side/crud-categorie-side.component';
import { EditArticleModalComponent } from './edit-article-modal/edit-article-modal.component';
import { ProductsByCategoriyComponent } from './products-by-categoriy/products-by-categoriy.component';
import { CategorieChartComponent } from './categorie-chart/categorie-chart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SuccessModalEditComComponent } from './success-modal-edit-com/success-modal-edit-com.component';
import { SuccessModalEditAssComponent } from './success-modal-edit-ass/success-modal-edit-ass.component';
import { SuccessModalAddProspectComponent } from './success-modal-add-prospect/success-modal-add-prospect.component';
import { SuccessModalEditProspectComponent } from './success-modal-edit-prospect/success-modal-edit-prospect.component';
import { SucessModalSetComComponent } from './sucess-modal-set-com/sucess-modal-set-com.component';
import { SucessModalEditDevComponent } from './sucess-modal-edit-dev/sucess-modal-edit-dev.component';
import { SuccessAddCatComponent } from './success-add-cat/success-add-cat.component';
import { SucessEditCatComponent } from './sucess-edit-cat/sucess-edit-cat.component';
import { SuccessAddArticleComponent } from './success-add-article/success-add-article.component';
import { SuccessEditArticleComponent } from './success-edit-article/success-edit-article.component';
import { SucessModalSetAssisComponent } from './sucess-modal-set-assis/sucess-modal-set-assis.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardSideComponent } from './dashboard-side/dashboard-side.component';
import { MiseajourStockComponent } from './miseajour-stock/miseajour-stock.component';
import { SuccessMiseajourComponent } from './success-miseajour/success-miseajour.component';
import { MsieajourStockSideComponent } from './msieajour-stock-side/msieajour-stock-side.component';
import { VisStockComComponent } from './vis-stock-com/vis-stock-com.component';
import { VisStockComsideComponent } from './vis-stock-comside/vis-stock-comside.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginAdminComponent,
    HomeComponent,
    EspaceAdminComponent,
    LoginCommercialComponent,
    EspaceCommercialComponent,
    AddAssistantComponent,
    LoginAssistantComponent,
    EspaceAssistantComponent,
    ResetPasswordCommercialComponent,
    ResetPasswordAdvComponent,
    ResetProfilCommercialComponent,
    ShowInfoCommercialComponent,
    CommercialSidebarComponent,
    EspaceFinalCommercialComponent,
    AddProspectWithSidebarComponent,
    EspaceAssistantWithSidebarComponent,
    AssistantSidebarComponent,
    SidebarAdminComponent,
    AddAssitantSidebarComponent,
    AddCommercialSidebarComponent,
    SetProfilComSidebarComponent,
    SetProfilAssistantSidebarComponent,
    SetProfilAssistantComponent,
    LoginTemplateComponent,
    AddArticleComponent,
    AddArticleSidebarComponent,
    CrudArticleComponent,
    CrudArticleSideComponent,
    AddDevisComponent,
    GestionDevisComponent,
    SuccessModalComponent,
    ModalErrorQuantityArticleComponent,
    ValidationDevisComponent,
    ValidationDevisSideComponent,
    ModalAddProspectComponent,
    ModalAddCommercialComponent,
    ModalAddAssistantComponent,
    CrudDevisEnattenteComponent,
    ModalDevisDetailsComponent,
    ConfirmationModalDevisComponent,
    EditModalDevisComponent,
    CrudDevisSideComponent,
    EditModalDevisAssiComponent,
    ConfirmationModalArticleComponent,
    CrudProspectComComponent,
    EditProspectModalComComponent,
    ConfimationModalProspectComponent,
    CrudProspectComsideComponent,
    AddProspectModalComponent,
    AddDevisModalComponent,
    CrudCommercialComponent,
    CrudCommercialSideComponent,
    ConfirmationModalCommercialComponent,
    SuccessModalAddcomComponent,
    EditCommercialModalComponent,
    CrudAssistantComponent,
    CrudAssistantSideComponent,
    ConfirmationModalAssistantComponent,
    EditAssistantModalComponent,
    ProdVendusComponent,
    ChartArticlesVendusComponent,
    ArticlePourcentageDevisComponent,
    PerformanceCommerciauxComponent,
    AddCategorieComponent,
    CrudCategorieComponent,
    EditCategorieComponent,
    ConfirmationModalCategorieComponent,
    CrudCategorieSideComponent,
    EditArticleModalComponent,
    ProductsByCategoriyComponent,
    CategorieChartComponent,
    HomepageComponent,
    SuccessModalEditComComponent,
    SuccessModalEditAssComponent,
    SuccessModalAddProspectComponent,
    SuccessModalEditProspectComponent,
    SucessModalSetComComponent,
    SucessModalEditDevComponent,
    SuccessAddCatComponent,
    SucessEditCatComponent,
    SuccessAddArticleComponent,
    SuccessEditArticleComponent,
    SucessModalSetAssisComponent,
    DashboardAdminComponent,
    DashboardSideComponent,
    MiseajourStockComponent,
    SuccessMiseajourComponent,
    MsieajourStockSideComponent,
    VisStockComComponent,
    VisStockComsideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    CommonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    ChartsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
