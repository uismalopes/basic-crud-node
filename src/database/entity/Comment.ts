import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  avatarUrl: string;

  @Column()
  description: string;
};