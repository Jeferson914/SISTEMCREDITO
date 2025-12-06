import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export const enviarSolicitud = async (data) => {
  try {
    await addDoc(collection(db, "solicitudes"), data);
    return { ok: true };
  } catch (error) {
    console.error("Error al guardar:", error);
    return { ok: false, error };
  }
};
