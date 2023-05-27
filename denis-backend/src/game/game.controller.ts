import {
  Controller,
  Param,
  Get,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { Game } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Controller('game')
export class GameController {
  constructor(private readonly prismaService: PrismaService) {}

  // CRUD

  // 1. Get all game

  @Get('/getAllGame')
  async getAllGame() {
    return await this.prismaService.game.findMany();
  }

  // 2. Get By Id

  @Get('/getById/:id')
  async getPostById(@Param('id') id: string) {
    return await this.prismaService.game.findUnique({
      where: { id: Number(id) },
    });
  }

  // 3. Add new game

  @Post('/addNewGame')
  async addNewGame(@Body() model: Omit<Game, 'id'>) {
    await this.prismaService.game.create({
      data: {
        name: model.name,
        description: model.description,
        imageUrl: model.imageUrl,
        genre: model.genre,
        metaRaitng: model.metaRaitng,
      },
    });
  }

  // 4. Update game

  @Patch('/updateGame')
  async updateGame(@Body() model: Game) {
    await this.prismaService.game.update({
      where: { id: Number(model.id) },
      data: {
        name: model.name,
        description: model.description,
        imageUrl: model.imageUrl,
        genre: model.genre,
        metaRaitng: model.metaRaitng,
      },
    });
  }

  // 5. Delete game

  @Delete('/deleteGame/:id')
  async deleteGame(@Param('id') id: string) {
    await this.prismaService.game.delete({
      where: { id: Number(id) },
    });
  }
}
