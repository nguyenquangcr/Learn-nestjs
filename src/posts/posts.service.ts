import { Inject, Injectable } from '@nestjs/common';
import { DataService } from 'src/Data/data.service';

@Injectable()
export class PostsService {
  constructor(
    @Inject('DATA_SERVICEposts.json') private dataService: DataService,
  ) {}

  createPost(post: any): void {
    this.dataService.save(post);
  }
}
