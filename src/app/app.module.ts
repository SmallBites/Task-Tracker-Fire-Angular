import { NgModule } from '@angular/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'environments/environment';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CommonModule } from '@angular/common';

const MaterialImports = [
  MatIconModule,
  MatFormFieldModule,
  MatBadgeModule,
  MatCardModule,
  MatSidenavModule,
  MatMenuModule,
  MatButtonToggleModule,
];

const PrimeImports = [
  SidebarModule,
  ButtonModule,
  TableModule,
  InputTextModule,
  MenubarModule,
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PrimeImports,
    MaterialImports,
    CommonModule,
    provideFirebaseApp(() => initializeApp(environment)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
