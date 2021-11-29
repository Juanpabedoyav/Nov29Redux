import {types} from '../types/types'

export const AddCitas = (cita)=>{
return{
    type:types.agregar,
    payload: cita
}
}

export const DeleteCita = (id)=>{
return{
    type:types.borrar,
    payload: id
}
}