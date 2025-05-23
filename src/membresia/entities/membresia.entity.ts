import { Metodo } from 'src/enum/entities.enum';
import { Agendamiento } from '../../agendamiento/entities/agendamiento.entity';
import { Pago } from '../../pago/entities/pago.entity';

import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ schema: 'esq_gimnasio', name: 'membresia' })
export class Membresia {
  @PrimaryGeneratedColumn('uuid', { name: 'id_membresia' })
  id: string;

  @Column({ name: 'fecha_creacion', type: 'timestamptz' })
  fecha_inicio: Date;

  @Column({ name: 'fecha_fin', type: 'timestamptz', nullable: true })
  fecha_fin?: Date;

  @Column({ name: 'costo', type: 'decimal', precision: 10, scale: 2 })
  costo: number;

  @Column({ name: 'usuario_id', type: 'varchar', length: 50 })
  usuario_id: string;

  @OneToMany(() => Agendamiento, (agendamiento) => agendamiento.membresias)
  agendamientos: Agendamiento[];

  @ManyToOne(() => Pago, (pago) => pago.membresia, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_transferencia' })
  pagos: Pago;

  @BeforeInsert()
  async createEndDate() {
    console.log(
      'Fecha de inicio:',
      this.fecha_inicio,
      'Tipo:',
      typeof this.fecha_inicio,
    );
    if (!this.fecha_fin) {
      if (this.pagos.metodo_pago === Metodo.MENSUAL) {
        const fechaFin = new Date(this.fecha_inicio);
        fechaFin.setMonth(fechaFin.getMonth() + 1); // Agregar un mes a la fecha de inicio
        this.fecha_fin = fechaFin;
      } else if (this.pagos.metodo_pago === Metodo.SEMANAL) {
        const fechaFin = new Date(this.fecha_inicio);
        fechaFin.setDate(fechaFin.getDate() + 7); // Agregar una semana a la fecha de inicio
        this.fecha_fin = fechaFin;
      }
    }
  }
}
