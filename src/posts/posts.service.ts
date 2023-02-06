import { Injectable } from '@nestjs/common';
import { DataService } from 'src/Data/data.service';

@Injectable()
export class PostsService {
  constructor(private readonly dataService: DataService) {}

  createPost(post: any): void {
    this.dataService.save(post);
  }
}
