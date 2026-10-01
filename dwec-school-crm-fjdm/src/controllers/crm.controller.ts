import type { Asistencia, Sancion, RegistroHorario, EstadoAsistencia, TipoSancion } from '../models/interfaces.ts';
import { StorageService } from '../services/storage.service';

export class CRMController {
    private asistenciaStorage = new StorageService<Asistencia>('crm_asistencias');
    private sancionesStorage = new StorageService<Sancion>('crm_sanciones');
    private horariosStorage = new StorageService<RegistroHorario>('crm_horarios');
}

public async registrarAsistencia(alumnoId: string, profesorId: string, franja: string, estado: EstadoAsistencia): Promise<boolean> {
    throw new Error('Método no implementado');
}

public async registrarSancion(alumnoId: string, profesorId: string, tipo: TipoSancion, descripcion: string): Promise<void> {
    throw new Error('Método no implementado');
}

public async comprobarConflictoProfesor(profesorId: string, dia: string, franja: string): Promise<boolean> {
    throw new Error ('Método no implementado');
}

public async obtenerInformeAlumno(alumnoId: string): Promise<{
    faltas: number; retrasos: number, sanciones: number}> {
        throw new Error('Método no implementado');
    }
}