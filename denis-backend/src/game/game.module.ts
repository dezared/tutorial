import { Module } from '@nestjs/common';
import { GameController } from './game.controller';
import { AppModule } from 'src/app.module';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [GameController],
  providers: [PrismaService],
})
export class GameModule {}
