import { Controller, Get, Inject } from '@nestjs/common';
import { get } from 'http';
import PostRepositoryInterface from 'src/repositories/PostRepositoryInterface';

@Controller('post')
export class PostController {
    constructor(
        @Inject('PostRepository')
        private readonly postRepository: PostRepositoryInterface,
    ){}
    
    @Get()
    async findAll(){
        return this.postRepository.all();
    }
}
