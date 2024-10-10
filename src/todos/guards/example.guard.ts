import { CanActivate } from '@nestjs/common';

export class ExampleGuard implements CanActivate {
  canActivate() {
    console.log('Guard');
    return true;
  }
}
