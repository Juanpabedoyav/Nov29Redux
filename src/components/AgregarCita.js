import React from 'react'
import { Button, Card, Icon, TextInput, Textarea } from 'react-materialize'
import {useForm} from '../hooks/useForm'
import uuid from 'react-uuid'
import {useDispatch} from 'react-redux'
import {AddCitas} from '../redux/actions/citasAction'
const AgregarCita = () => {


const dispatch = useDispatch()

const [formValue, handleInputChange, reset]=useForm({
  nombre:'',
  fecha:'',
  hora:'',
  sintomas:''
})

const {nombre, fecha, hora, sintomas}= formValue
    
    const handleSubmit =e=>{
      e.preventDefault()

dispatch(AddCitas({
  id: uuid(),
  nombre,
  fecha,
  hora,
  sintomas

}))

reset();

    }
    
    return (
        <div>      
         <Card title="Agregar Citas" >
            <form onSubmit={handleSubmit} >
                <div className="row">
                <TextInput 
                id="nombre" 
                label="Nombre" 
                name='nombre'
                value={nombre}
                onChange={handleInputChange}

                /> 
                               
                </div>
                <div className="row">
                    <div className="col s10 l6"> 
                    <input type="date" id="fecha" name="fecha"
                            value={fecha}
                            onChange={handleInputChange} />
                  
                                      </div>
                    <div className="col s10 l6">
    <input type="time" id="hora" name="hora"
                            value={hora}
                            onChange={handleInputChange} />
  
/>

                    </div>
                </div>
                <div className="row">


                <Textarea
                   label="Sintomas"
  name='sintomas'
                value={sintomas}
                                            onChange={handleInputChange}

              
  id="Textarea-48"
/>


                </div>
                <Button
                    className="indigo darken-4"
                    type="submit"
                    node="button"
                    waves="light"
                >
                                        Guardar

                    <Icon right>
                    send
                    </Icon>
                </Button>
            </form>
        </Card>
        </div>

    )
}

export default AgregarCita