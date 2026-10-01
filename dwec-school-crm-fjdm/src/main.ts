import { CRMController } from './controllers/crm.controller.ts'

const crm = new CRMController();

async function ejecutarPrueba() {
  console.log("=== Iniciando simulación de SchoolCRM ===");
  try {

  } catch (error) {
    console.error("Error en la ejecución:", error);
  }
}

ejecutarPrueba();