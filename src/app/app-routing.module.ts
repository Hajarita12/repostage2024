import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EspaceAdminComponent } from './espace-admin/espace-admin.component';
import { LoginCommercialComponent } from './login-commercial/login-commercial.component';
import { EspaceCommercialComponent } from './espace-commercial/espace-commercial.component';
import { AddAssistantComponent } from './add-assistant/add-assistant.component';
import { LoginAssistantComponent } from './login-assistant/login-assistant.component';
import { EspaceAssistantComponent } from './espace-assistant/espace-assistant.component';
import { ResetPasswordCommercialComponent } from './reset-password-commercial/reset-password-commercial.component';
import { ResetPasswordAdvComponent } from './reset-password-adv/reset-password-adv.component';
import { ResetProfilCommercialComponent } from './reset-profil-commercial/reset-profil-commercial.component';
import { ShowInfoCommercialComponent } from './show-info-commercial/show-info-commercial.component';
import { EspaceFinalCommercialComponent } from './espace-final-commercial/espace-final-commercial.component';
import { AddProspectWithSidebarComponent } from './add-prospect-with-sidebar/add-prospect-with-sidebar.component';
import { EspaceAssistantWithSidebarComponent } from './espace-assistant-with-sidebar/espace-assistant-with-sidebar.component';
import { AssistantSidebarComponent } from './assistant-sidebar/assistant-sidebar.component';
import { AddAssitantSidebarComponent } from './add-assitant-sidebar/add-assitant-sidebar.component';
import { AddCommercialSidebarComponent } from './add-commercial-sidebar/add-commercial-sidebar.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
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
import { ValidationDevisComponent } from './validation-devis/validation-devis.component';
import { ValidationDevisSideComponent } from './validation-devis-side/validation-devis-side.component';
import { CrudDevisEnattenteComponent } from './crud-devis-enattente/crud-devis-enattente.component';
import { CrudDevisSideComponent } from './crud-devis-side/crud-devis-side.component';
import { CrudProspectComComponent } from './crud-prospect-com/crud-prospect-com.component';
import { CrudProspectComsideComponent } from './crud-prospect-comside/crud-prospect-comside.component';
import { CrudCommercialComponent } from './crud-commercial/crud-commercial.component';
import { CrudCommercialSideComponent } from './crud-commercial-side/crud-commercial-side.component';
import { CrudAssistantSideComponent } from './crud-assistant-side/crud-assistant-side.component';
import { ProdVendusComponent } from './prod-vendus/prod-vendus.component';
import { ChartArticlesVendusComponent } from './chart-articles-vendus/chart-articles-vendus.component';
import { ArticlePourcentageDevisComponent } from './article-pourcentage-devis/article-pourcentage-devis.component';
import { PerformanceCommerciauxComponent } from './performance-commerciaux/performance-commerciaux.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { CrudCategorieComponent } from './crud-categorie/crud-categorie.component';
import { CrudCategorieSideComponent } from './crud-categorie-side/crud-categorie-side.component';
import { CategorieChartComponent } from './categorie-chart/categorie-chart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardSideComponent } from './dashboard-side/dashboard-side.component';
import { MiseajourStockComponent } from './miseajour-stock/miseajour-stock.component';
import { MsieajourStockSideComponent } from './msieajour-stock-side/msieajour-stock-side.component';
import { VisStockComComponent } from './vis-stock-com/vis-stock-com.component';
import { VisStockComsideComponent } from './vis-stock-comside/vis-stock-comside.component';



const routes: Routes = [
 

  { path: '',component: HomepageComponent },
  { path: 'admin',component: LoginAdminComponent },
  { path: 'espace-admin',component: EspaceAdminComponent },
  { path: 'login-commercial',component: LoginCommercialComponent },
  { path: 'espace-commercial',component: EspaceCommercialComponent },
  { path: 'add-assistant',component: AddAssistantComponent },
  { path: 'login-assistant',component: LoginAssistantComponent },
  { path: 'espace-assistant',component: EspaceAssistantComponent },
  { path: 'forgot-password-commercial',component: ResetPasswordCommercialComponent },
  { path: 'forgot-password-assistant',component: ResetPasswordAdvComponent },
  { path: 'reset-profil-commercial',component: ResetProfilCommercialComponent },
  { path: 'show-info-commercial',component: ShowInfoCommercialComponent },
  { path: 'espace-final-commercial',component: EspaceFinalCommercialComponent },
  { path: 'add-prospect-with-sidebar',component: AddProspectWithSidebarComponent },
  { path: 'espace-assistant-with-sidebar',component: EspaceAssistantWithSidebarComponent },
  { path: 'assistant-sidebar',component: AssistantSidebarComponent },
  { path: 'add-assistant-with-sidebar',component: AddAssitantSidebarComponent },
  { path: 'add-commercial-with-sidebar',component: AddCommercialSidebarComponent },
  { path: 'sidebar-admin',component: SidebarAdminComponent },
  { path: 'set-profil-com-sidebar',component: SetProfilComSidebarComponent },
  { path: 'set-profil-assistant-sidebar',component: SetProfilAssistantSidebarComponent },
  { path: 'set-profil-assistant',component: SetProfilAssistantComponent },
  { path: 'login-temp',component: LoginTemplateComponent },
  { path: 'add-article-sidebarr',component: AddArticleSidebarComponent },
  { path: 'crud-article',component: CrudArticleComponent },
  { path: 'crud-article-sidebar',component: CrudArticleSideComponent },
  { path: 'add-devis',component: AddDevisComponent },
  { path: 'gestion-devis',component: GestionDevisComponent},
  { path: 'validation-devis',component: ValidationDevisComponent},
  { path: 'validation-devis-side',component: ValidationDevisSideComponent},
  { path: 'crud-devis-enattente',component: CrudDevisSideComponent},
  { path: 'crud-prospect-com',component: CrudProspectComComponent},
  { path: 'crud-prospect',component: CrudProspectComsideComponent},
  { path: 'crud-commercial',component: CrudCommercialSideComponent},
  { path: 'crud-assistant',component: CrudAssistantSideComponent},
  { path: 'produits-vendus',component: ProdVendusComponent},
  { path: 'articles-vendus',component: ChartArticlesVendusComponent},
  { path: 'presence',component: ArticlePourcentageDevisComponent},
  { path: 'performance',component: PerformanceCommerciauxComponent},
  { path: 'add-categorie',component: AddCategorieComponent},
  { path: 'crud-categorie',component: CrudCategorieSideComponent},
  { path: 'chart-categorie',component: CategorieChartComponent},
  { path: 'homepage',component: HomepageComponent},
  { path: 'dashboard-side',component: DashboardSideComponent},

  { path: 'miseajour-stock',component: MsieajourStockSideComponent},
  { path: 'visualisation-stock',component: VisStockComsideComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
