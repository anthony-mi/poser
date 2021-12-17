import { Shallow } from 'shallow-render';
import { Router } from '@angular/router';

import { HeaderComponent } from './header.component';
import { SharedModule } from '../../shared.module';

describe('HeaderComponent', () => {
  let shallow: Shallow<HeaderComponent>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    router = jasmine.createSpyObj('Router', ['navigate']);
    shallow =
      new Shallow(HeaderComponent, SharedModule)
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
