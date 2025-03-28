import { Agendamiento } from '../../agendamiento/entities/agendamiento.entity';
import { Pago } from '../../pago/entities/pago.entity';
import { User } from '../../user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';

export enum Tipo {
  MENSUAL = 'Mensual',
  DIARIO = 'Diario',
}

@Entity({ schema: 'esq_gimnasio', name: 'membresia' })
export class Membresia {

  @PrimaryGeneratedColumn('uuid', { name: 'id_membresia' })
  id: string;

  @CreateDateColumn({ name: 'fecha_creacion', type: 'timestamptz' })
  fecha_inicio: Date;

  @Column({ name: 'fecha_fin', type: 'timestamptz' })
  fecha_fin: Date;

  @Column({ name: 'costo', type: 'decimal', precision: 10, scale: 2 })
  costo: number

  @ManyToOne(() => User, (user) => user.membresias)
  @JoinColumn({ name: 'usuario_id' })
  users: User;

  @OneToMany(() => Agendamiento, (agendamiento) => agendamiento.membresias)
  agendamientos: Agendamiento[];

  @ManyToOne(() => Pago,  (pago) => pago.membresia)
  @JoinColumn({ name: 'pago_id' })
  pagos: Pago;

}
