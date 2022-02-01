import { CustomStyleDirective } from './custom-style.directive';

describe('CustomStyleDirective', () => {
  it('should create an instance', () => {
    var el:any;
    const directive = new CustomStyleDirective(el);
    expect(directive).toBeTruthy();
  });
});
