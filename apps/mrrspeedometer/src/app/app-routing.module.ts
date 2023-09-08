import { NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
    ActivatedRoute,
    Routes,
    Router,
    RouterModule,
    NavigationEnd,
} from '@angular/router';
import { MainViewComponent } from './views/main-view/main-view.component';

const routes: Routes = [
    {
        path: '',
        component: MainViewComponent,
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {}),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {
    private readonly appTitle = 'Model Railroad Speedometer';

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private titleService: Title
    ) {
        router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.setPageTitle(route);
            }
        });
    }

    setPageTitle(route: ActivatedRoute) {
        let snapshot = route.snapshot;
        let activated = route.firstChild;
        if (activated != null) {
            while (activated != null) {
                snapshot = activated.snapshot;
                activated = activated.firstChild;
            }
        }

        const title = snapshot.data['titleKey'];
        if (title) {
            this.titleService.setTitle(title + ' | ' + this.appTitle);
        } else {
            this.titleService.setTitle(this.appTitle);
        }
    }
}
