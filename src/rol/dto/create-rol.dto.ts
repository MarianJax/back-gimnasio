import { IsNotEmpty, IsOptional, IsString, Min } from "class-validator";

export class CreateRolDto {
    @IsString({ message: 'El nombre debe ser un texto' })
    @IsNotEmpty({ message: 'El nombre del rol es requerido' })
    nombre: string;

    @Min(0.25, { message: 'El monto de pago debe ser mayor a 0.25' })
    @IsNotEmpty({ message: 'El monto de pago es requerido' })
    @IsOptional()
    monto_pago: number;

    @Min(1, { message: 'El tiempo debe ser mayor a 1' })
    @IsNotEmpty({ message: 'El tiempo es requerido' })
    @IsOptional()
    tiempo: number;

    @Min(1, { message: 'El cupo debe ser mayor a 1' })
    @IsNotEmpty({ message: 'El cupo es requerido' })
    @IsOptional()
    cupo: number;
}

