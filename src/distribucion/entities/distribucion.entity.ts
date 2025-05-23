import { Agendamiento } from 'src/agendamiento/entities/agendamiento.entity';
import { Horario } from '../../horario/entities/horario.entity';

import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity({ schema: 'esq_gimnasio', name: 'distribucion' })
export class Distribucion {
  @PrimaryGeneratedColumn('uuid', { name: 'id_distribucion' })
  id: string;

  @Column({ name: 'rol_id', type: 'varchar', length: 50 })
  rol_id: string;

  @Column({
    name: 'pago_diario',
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true,
  })
  pago_diario?: number;
@Column({
    name: 'pago_semanal', 
    type: 'decimal',
    precision: 10,    
    scale: 2,
    nullable: true,
})
  pago_semanal?: number;
  
  @Column({
    name: 'pago_mensual',
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true,
  })
  pago_mensual?: number;

  @Column({ name: 'tiempo', type: 'integer', nullable: true })
  tiempo?: number;

  @Column({ name: 'cupos', type: 'integer', nullable: true })
  cupo?: number;

  @OneToMany(() => Horario, (horario) => horario.distribucion)
  horarios: Horario[];

  @OneToMany(() => Agendamiento, (agend) => agend.distribucion)
  agendamiento: Agendamiento[];
}
