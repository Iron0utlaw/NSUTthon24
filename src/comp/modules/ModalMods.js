import { clear } from "./RegMods";

const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
);
export function openModal(data,setData,setShowModal,team){
    clear(data,setData,team);
    setShowModal(true);
}
export async function closeModal(setShowModal){
    await delay(1000);
    setShowModal(false);
}