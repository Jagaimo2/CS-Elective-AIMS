import { LoginComponent } from './pages/login/login.component';
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './pages/home/home.component';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'gallery', component: GalleryComponent },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    ContentHeaderComponent,
    FooterComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
