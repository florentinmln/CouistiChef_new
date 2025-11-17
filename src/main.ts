import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { RecipeBookRepository } from './app/repository/recipe-book-repository';
import { RecipeBookRepositoryDummyImpl } from './app/repository/recipe-book-repository-dummy-impl';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RecipeBookRepository, useClass: RecipeBookRepositoryDummyImpl },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
