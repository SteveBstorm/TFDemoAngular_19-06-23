import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { ArticleAPI } from '../articleAPI.model';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { inject } from '@angular/core';

// export class articleResolver implements Resolve<ArticleAPI> {
//   constructor(private service : ApiService){}
//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ArticleAPI | Observable<ArticleAPI> | Promise<ArticleAPI> {
//     return this.service.getById(route.params['id'])
//   }

// }

export const articleResolver: ResolveFn<Observable<ArticleAPI>> =
(route : ActivatedRouteSnapshot,
  state : RouterStateSnapshot,
  service : ApiService = inject(ApiService)) => {
  return service.getById(route.params['id'])
};
