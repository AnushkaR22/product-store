import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTo'
})
export class TruncatePipe {
  transform(value: string, args: any) : string {
    let limit = args ? parseInt(args, 20) : 20;
    let trail = '...';

    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}