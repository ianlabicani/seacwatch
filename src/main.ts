import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"capstone-63f36","appId":"1:969073261181:web:7bed6e8dd209597fafcf14","storageBucket":"capstone-63f36.appspot.com","apiKey":"AIzaSyDqN-da0lcsO7G90djx0rTrqCihuQOrheg","authDomain":"capstone-63f36.firebaseapp.com","messagingSenderId":"969073261181"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())),
  ],
});
