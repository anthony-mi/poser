import { Shallow } from 'shallow-render';

import { AppModule } from 'src/app/app.module';

import { HeaderComponent } from './header.component';
import { Router } from '@angular/router';

describe('HeaderComponent', () => {
  let shallow: Shallow<HeaderComponent>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    router = jasmine.createSpyObj('Router', ['navigate']);
    shallow =
      new Shallow(HeaderComponent, AppModule)
      .mock(Router, router);
  });
      
  it('should create', async() => {
    const { instance } = await shallow.render();
    expect(instance).toBeTruthy();
  });
  
  it('should tell router to navigate when positions clicked', async() => {
    const { instance } = await shallow.render();
    const url = '/pairs';
    instance.navigateTo(url);
    expect(router.navigate).toHaveBeenCalledOnceWith([url]);
  })
});
