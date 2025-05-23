import { Distribucion } from 'src/distribucion/entities/distribucion.entity';
import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Membresia } from '../../membresia/entities/membresia.entity';
import { Pago } from '../../pago/entities/pago.entity';

@Entity({ schema: 'esq_gimnasio', name: 'agendamiento' })
export class Agendamiento {
  // Generar una clave unica de cada agendamiento que se registra
  @PrimaryGeneratedColumn('uuid', { name: 'id_agendamiento' })
  id: string;

  @Column({ name: 'fecha', type: 'timestamptz' })
  fecha: Date;

  @Column({ name: 'hora_inicio', type: 'time' })
  hora_inicio: string | Date;

  @Column({ name: 'hora_fin', type: 'time' })
  hora_fin: string | Date;

  @Column({ name: 'asistio', type: 'boolean', default: null, nullable: true })
  asistio?: boolean;

  @Column({ name: 'usuario_id', type: 'varchar', length: 50 })
  usuario_id: string;

  @Column({ name: 'facu_id', type: 'varchar', length: 100, default: null, nullable: true })
  facu_id?: string;

  @Column({ name: 'carr_id', type: 'varchar', length: 100, default: null, nullable: true })
  carr_id?: string;

  @Column({ name: 'dep_id', type: 'varchar', length: 100, default: null, nullable: true })
  dep_id?: string;

  @ManyToOne(() => Membresia, (membresia) => membresia.agendamientos, {
    nullable: true,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'membresia_id' })
  membresias?: Membresia;

  @ManyToOne(() => Pago, (pago) => pago.agendamiento, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_transferencia' })
  pagos?: Pago;

  @ManyToOne(() => Distribucion, (dist) => dist.agendamiento, { nullable: true })
  @JoinColumn({ name: 'distrubucion_id' })
  distribucion?: Distribucion;

  @BeforeInsert()
  InitEstado() {
    this.asistio = null;
  }
}
