import { IsEnum, IsISO8601, IsNotEmpty, IsString, Min } from "class-validator";
import { Estado } from "../../enum/entities.enum";

export class CreateMaquinaDto {
  @IsString({ message: 'El nombre de la máquina debe ser un texto' })
  @IsNotEmpty({ message: 'El nombre de la máquina debe tener al menos 3 caracteres' })
  nombre: string;

  @IsNotEmpty({ message: 'La fecha de compra no puede estar vacío' })
  @IsISO8601({ strict: true }, { message: 'La fecha de compra debe tener el formato YYYY-MM-DD' })
  fecha_compra: Date;

  @Min(1, { message: 'La cantidad no puede ser menor a 1' })
  @IsNotEmpty({ message: 'La cantidad no puede estar vacío' })
  cantidad: number;

  @IsEnum(Estado, { message: 'Estado inválido. Debe ser uno de los valores: Disponible, en mantenimiento o Fuera de servicio' })
  @IsNotEmpty({ message: 'El estado de la máquina no puede estar vacío' })
  estado: Estado;

  @IsNotEmpty({ message: 'La descripción no puede estar vacío' })
  @IsString({ message: 'La descripción debe ser un texto' })
  descripcion: string;

}
