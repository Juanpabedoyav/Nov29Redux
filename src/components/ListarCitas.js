import React from 'react'
import { Button, Card, Icon, Table } from 'react-materialize'
import {useSelector, useDispatch} from 'react-redux'
const ListarCitas = () => {

const dispatch = useDispatch()



const {citas} = useSelector(state => state.citas)

const handleBorrar = (id)=>{
dispatch(DeleteCitas(id))

}

    return (
        <Card title="Agenda">
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Sintomas</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        citas.map(cita =>(
                                 <tr key={cita.id}>
                            <td>{cita.nombre}</td>
                            <td>{cita.fecha}</td>
                            <td>{cita.hora}</td>
                            <td>{cita.sintomas}</td>
                            <td>
                                <Button
                                    className="red"
                                    node="button"
                                    waves="light"
                                    onClick={()=>{
                                        handleBorrar(cita.id);
                                    }}>
                                    Borrar
                                    <Icon right>delete</Icon>
                                </Button>
                            </td>
                        </tr>
                        ))
                    }
                       
                    </tbody>
                </Table>
            </div>
        </Card>
    )
}

export default ListarCitas
