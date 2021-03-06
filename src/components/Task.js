import moment from 'moment'
import { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete }) => {

    const novaData = moment(task.data).format('DD-MMM-YY');
    const dataAtual = moment(new Date()).format('YYYY-MM-DD');
    const [alerta, setAlerta] = useState(false)
    const [atrasada, setAtrasada] = useState(false);

    useEffect(() => {
        if (task.data === dataAtual) {
            setAlerta(true)
        }
        if(task.data < dataAtual){
            setAtrasada(true)
        }
    },[dataAtual, task.data])

    return (
        <>
            <div className='task'>
            {atrasada ? <p className='textoAtrasada'>Tarefa atrasada</p> : null}
            {alerta ? <p className='textoAlert'>Tarefa de hoje</p> : null}
                <h3>{task.tarefa} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => { onDelete(task._id) }} /></h3>
                <p>{novaData}</p>
                <p>{task.hora}</p>
            </div>
        </>
    )
}

export default Task
