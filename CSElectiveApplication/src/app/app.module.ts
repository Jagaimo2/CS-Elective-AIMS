import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from "@angular/forms";
import { LoginComponent} from "./login/login.component";
import { HomeComponent } from './pages/home/home.component';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { RouterModule, Routes} from "@angular/router";
import { ForumsComponent } from './pages/forums/forums.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { HttpClientModule } from "@angular/common/http";
import { ForumComponent } from './pages/forums/forum/forum.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'login', component: LoginComponent},
  { path: 'forums', component: ForumsComponent},
  { path: 'forums/:id', component: ForumComponent},
  { path: 'jobs', component: JobsComponent},
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '404'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    ContentHeaderComponent,
    FooterComponent,
    GalleryComponent,
    ForumsComponent,
    JobsComponent,
    ForumComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
