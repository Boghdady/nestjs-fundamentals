import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class CustomValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // Write your own logic here (Transformation or validation)
    console.log('CustomValidationPipe', value);
    return 'DEV' + value;
  }
}
