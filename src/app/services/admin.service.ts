import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Label, SingleDataSet } from 'ng2-charts';

const API_URL = 'http://localhost:8090/admin';
const COMMERCIAL_URL = 'http://localhost:8090/commercial';
const PROSPECT_URL = 'http://localhost:8090/prospect';
const ASSISTANT_URL = 'http://localhost:8090/assistantADV';
const ARTICLE_URL = 'http://localhost:8090/articles';
const DEVIS_URL = 'http://localhost:8090/devis';
const DEVIS_ARTICLE_URL = 'http://localhost:8090/devis-articles';
const CATEGORIE_URL = 'http://localhost:8090/categories';




@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  // Utilisation de session storage pour stocker les informations de l'admin
  admin: any = sessionStorage.getItem("ADMIN") ? JSON.parse(sessionStorage.getItem("ADMIN")!) : null;
  commercial: any = sessionStorage.getItem("COMMERCIAL") ? JSON.parse(sessionStorage.getItem("COMMERCIAL")!) : null;
  assistant: any = sessionStorage.getItem("ASSISTANT") ? JSON.parse(sessionStorage.getItem("ASSISTANT")!) : null;
  updateProspect(prospectId: number, prospect: any): Observable<any> {
    const url = `${PROSPECT_URL}/update/${prospectId}`; // URL de mise à jour du prospect avec son ID
    return this.http.put(url, prospect);
  }
  resetCommercialPassword(username: string, email: string): Observable<any> {
    const resetPasswordUrl = `${COMMERCIAL_URL}/resetPassword`; // URL de l'endpoint de réinitialisation du mot de passe pour les commerciaux
    const body = { username: username, email: email }; // Corps de la requête avec le nom d'utilisateur et l'email
    
    return this.http.post(resetPasswordUrl, body);
  }
  updateArticleByReference(reference: string, updateData: any): Observable<any> {
    return this.http.put(`${ARTICLE_URL}/${reference}`, updateData);
  }
  updateArticlesFromExcel(articlesData: any[]): Observable<any> {
    return this.http.put(`${ARTICLE_URL}/updateFromExcel`, articlesData);
  }
  
  getAllProspects(): Observable<any[]> {
    return this.http.get<any[]>(`${PROSPECT_URL}/all`);
  }
  getCommercials(): Observable<any[]> {
    return this.http.get<any[]>(`${COMMERCIAL_URL}/all`);
  }
  login(form: any): Observable<boolean> {
    return this.http.get<boolean>(`${API_URL}/loginAd/${form.username}/${form.password}`);
  }
  
  // Endpoint pour récupérer les informations de l'admin connecté
  loginUser(form: any){
    return this.http.get(API_URL + '/loginUserAd/' + form.username + '/' + form.password);
  }
  loginAssistant(form: any): Observable<boolean> {
    return this.http.get<boolean>(`${ASSISTANT_URL}/loginAssi/${form.username}/${form.password}`);
  }
  
  // Endpoint pour récupérer les informations de l'admin connecté
  loginUserAssistant(form: any){
    return this.http.get(ASSISTANT_URL + '/loginUserAssi/' + form.username + '/' + form.password);
  }

  loginCom(form: any): Observable<boolean> {
    return this.http.get<boolean>(`${COMMERCIAL_URL}/loginCom/${form.username}/${form.password}`);
  }
  
  resetPassword(username: string, newPassword: string): Observable<any> {
    // Implémentez votre logique pour réinitialiser le mot de passe ici
    // Vous pouvez utiliser HttpClient pour envoyer une requête HTTP PUT ou POST par exemple
    const url = `${API_URL}/resetPassword`; // Remplacez par votre endpoint backend approprié
    return this.http.post(url, { username, newPassword });
  }

  updateCommercialPassword(email: string, newPassword: string): Observable<any> {
    const url = `${COMMERCIAL_URL}/updatePassword/${email}/${newPassword}`;
    return this.http.put(url, null);
  }
  
  updateCommercial(id: number, commercial: any): Observable<any> {
    return this.http.put(`${COMMERCIAL_URL}/update/${id}`, commercial);
  }
  updateAssistant(id: number, assistant: any): Observable<any> {
    return this.http.put(`${ASSISTANT_URL}/update/${id}`, assistant);
  }
  getCommercialById(id: string) {
    return this.http.get(`${COMMERCIAL_URL}/${id}`);
  }
  
  getAssistantById(id: string) {
    return this.http.get(`${ASSISTANT_URL}/${id}`);
  }
  
  updateAdvPassword(email: string, newPassword: string): Observable<any> {
    const url = `${ASSISTANT_URL}/updatePassword/${email}/${newPassword}`;
    return this.http.put(url, null);
  }
  
  loginUserCom(form: any): Observable<any> {
    return this.http.get<any>(`${COMMERCIAL_URL}/loginUserCom/${form.username}/${form.password}`);
  }

  addCommercial(commercial: any): Observable<any> {
    
    return this.http.post(`${COMMERCIAL_URL}/create`, commercial);
  }
  addAssistant(assistant: any): Observable<any> {
    
    return this.http.post(`${ASSISTANT_URL}/create`, assistant);
  }
  
  sendEmail(email: string, subject: string, htmlContent: string) {
    const body = {
      to: email,
      subject: subject,
      htmlContent: htmlContent
    };
    return this.http.post(API_URL + '/sendEmail', body);
  }

  addProspect(prospectData: any): Observable<any> {
    return this.http.post<any>(PROSPECT_URL + '/create', prospectData);
  }
  addArticle(article: any): Observable<any> {
    return this.http.post<any>(ARTICLE_URL + '/create', article);
  }
  getArticles(): Observable<any[]> {
    return this.http.get<any[]>(`${ARTICLE_URL}/all`);
  }
  deleteArticle(reference: string): Observable<void> {
    return this.http.delete<void>(`${ARTICLE_URL}/delete/${reference}`);
  }

  updateArticle(reference: string, updatedArticle: any): Observable<any> {
    const url = `${ARTICLE_URL}/${reference}`; // URL pour l'API de mise à jour d'article
    return this.http.put(url, updatedArticle);
  }
  getClients(commercialId: number): Observable<any[]> {
    return this.http.get<any[]>(`${PROSPECT_URL}/clients/${commercialId}`);
  }
  addDevis(devisData: any): Observable<any> {
    return this.http.post<any>(DEVIS_URL + '/create', devisData);
  }
  addDevisArticle(devisArticle: any): Observable<any> {
    return this.http.post<any>(DEVIS_ARTICLE_URL + '/create', devisArticle);
  }
  getArticleByReference(reference: string) {
    return this.http.get(`${ARTICLE_URL}/${reference}`);
  }
  getDevisByReference(reference: string) {
    return this.http.get(`${DEVIS_URL}/${reference}`);
  }
  updateArticleQteReservee(article: any, updatedQuantity: number): Observable<any> {
    const url = `${ARTICLE_URL}/updateQteReservee/${updatedQuantity}`;
    return this.http.put(url, article);
}
getAllDevis(): Observable<any[]> {
  return this.http.get<any[]>(`${DEVIS_URL}/all`);
}
getAllClients(): Observable<any[]> {
  return this.http.get<any[]>(`${PROSPECT_URL}/allclients`);
}
getalldevis(): Observable<any[]> {
  return this.http.get<any[]>(`${DEVIS_URL}/all`);
}
updateDevis(devisRef: string, devis: any): Observable<any> {
  const url = `${DEVIS_URL}/${devisRef}`; // URL de mise à jour du prospect avec son ID
  return this.http.put(url, devis);
}
getArticlesByDevisReference(devisReference: string): Observable<any[]> {
  return this.http.get<any[]>(`${DEVIS_ARTICLE_URL}/${devisReference}/articles`);
}

updateQtesArticle(articleReference: any, articleQte: any): Observable<any> {
  const url = `${ARTICLE_URL}/updateQuantites/${articleReference}`;
  return this.http.put(url, articleQte);
}
updateQtesArticleDevisAnnule(articleReference: any, articleQte: any): Observable<any> {
  const url = `${ARTICLE_URL}/updateQuantitesDevisAnnule/${articleReference}`;
  return this.http.put(url, articleQte);
}

getDevisEnAttenteByCommercial(commercialId: number): Observable<any[]> {
  return this.http.get<any[]>(`${DEVIS_URL}/enattente/commercial/${commercialId}`);
}
deleteDevis(reference: string): Observable<void> {
  return this.http.delete<void>(`${DEVIS_URL}/delete/${reference}`);
}
updateDevisArticles(devisReference: string, articlesData: any[]): Observable<any> {
  return this.http.put(`${DEVIS_ARTICLE_URL}/devis/${devisReference}/articles`, articlesData);
}
getProspectsByCommercialId(commercialId: number): Observable<any> {
  return this.http.get<any>(`${PROSPECT_URL}/commercial/${commercialId}`);
}
deleteProspect(prospectId: number): Observable<void> {
  return this.http.delete<void>(`${PROSPECT_URL}/delete/${prospectId}`);
}
deleteCommercial(commercialId: number): Observable<void> {
  return this.http.delete<void>(`${COMMERCIAL_URL}/delete/${commercialId}`);
}
getAssistant(): Observable<any[]> {
  return this.http.get<any[]>(`${ASSISTANT_URL}/all`);
}
deleteAssistant(assistantId: number): Observable<void> {
  return this.http.delete<void>(`${ASSISTANT_URL}/delete/${assistantId}`);
}
getMonthlySales(): Observable<{ labels: string[], values: number[] }> {
  // Concaténer le chemin relatif à l'URL de base
  return this.http.get<{ labels: string[], values: number[] }>(`${DEVIS_URL}/monthly-sales`);
}
getArticleQuantities(): Observable<any> {
  return this.http.get<any>(`${ARTICLE_URL}/quantites-vendus`);
}
getArticlesPresence(): Observable<{ labels: Label[]; values: SingleDataSet }> {
  return this.http.get<{ labels: Label[]; values: SingleDataSet }>(`${ARTICLE_URL}/presence`);
}
getPerformanceData(): Observable<{ performance: { [key: string]: number } }> {
  return this.http.get<{ performance: { [key: string]: number } }>(`${COMMERCIAL_URL}/performance`);
}

createCategorie(categorie: any): Observable<any> {
  return this.http.post(`${CATEGORIE_URL}/create`, categorie);
}
deleteCategorie(id: number): Observable<void> {
  return this.http.delete<void>(`${CATEGORIE_URL}/delete/${id}`);
}
getCategories(): Observable<any[]> {
  return this.http.get<any[]>(`${CATEGORIE_URL}/all`);
}
updateCategorie(id: number, categorie: any): Observable<any> {
  const url = `${CATEGORIE_URL}/update/${id}`; // URL de mise à jour du prospect avec son ID
  return this.http.put(url, categorie);
}
getCategorieById(id: number) {
  return this.http.get(`${CATEGORIE_URL}/${id}`);
}
getProductsByCategory(categorieName: number): Observable<any[]> {
  return this.http.get<any[]>(`${ARTICLE_URL}/byCategorie/${categorieName}`);
}
getCategoryData() {
  return this.http.get<{ categories: { name: string; productCount: number }[] }>(`${CATEGORIE_URL}/chart`);
}



}
