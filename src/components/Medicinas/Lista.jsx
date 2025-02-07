//---------------------componente servidor---------------------
import { obtenerMedicinas } from "@/lib/data";
// import Link from "next/link";
// import Modal from "../modal";
// import MedicinaModificar from "./Modificar";
// import MedicinaEliminar from "./Eliminar";
// import MedicinaInsertar from "./Insertar";
export default async function ListaMedicinas() {
    const medicinas = await obtenerMedicinas();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* <Modal texto="Insertar" className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md cursor-pointer transition-colors duration-300 ease-in-out">
                <MedicinaInsertar />
            </Modal> */}
            {
                medicinas.map(medicina =>
                    <li key={medicina.id} className="bg-white shadow-md rounded p-4">
                        <div className="flex flex-col items-start space-y-2">
                            <p className="text-2xl font-semibold">Nombre: <span className="font-normal">{medicina.nombre}</span></p>
                            <p className="text-lg font-semibold">Vía de administración: <span className="font-normal">{medicina.via}</span></p>
                        </div>
                        <div>
                            {/* <Link href={`/medicinas/${medicina.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Ver</Link> */}
{/* 
                            <Modal texto="Eliminar" className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md cursor-pointer transition-colors duration-300 ease-in-out">
                               <MedicinaEliminar medicina={medicina}/>
                            </Modal>
                            <Modal texto="Modificar" className="bg-yellow-500 hover:bg-yellow-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md cursor-pointer transition-colors duration-300 ease-in-out">
                               <MedicinaModificar medicina={medicina}/>
                            </Modal> */}
                        </div>
                    </li>
                )
            }
        </div>
    );
}