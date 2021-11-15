import { useState } from 'react';

const AddTask = ({ onAdd }) => {

    const [tarefa, setTarefa] = useState('');
    const [data, setData] = useState(Date());
    const [hora, setHora] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()
        if(!tarefa) {
            alert('Por favor digite o nome da sua tarefa'); 
        } else if(!data) {
            alert('Por favor digite a data da sua tarefa');
        } else if(!hora) {
            alert('Por favor digite a hora da sua tarefa');
        } else {
            onAdd({ tarefa, data, hora })
            setTarefa('');
            setData('');
            setHora('');
        }
    }
    
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <div>
                    <label>Tarefa</label>
                    <input
                        type='text'
                        placeholder='Adicione sua tarefa'
                        value={tarefa}
                        onChange={(e) => setTarefa(e.target.value)}
                    />
                </div>
                <div>
                    <label>Data</label>
                    <input
                        type='date'
                        placeholder='Adicione o dia da sua tarefa'
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                    />
                </div>
                <div>
                    <label>Hora</label>
                    <input
                        type='time'
                        placeholder='Adicione a hora da sua tarefa'
                        value={hora}
                        onChange={(e) => setHora(e.target.value)}
                    />
                </div>

                <input type='submit' value='Adicionar' className='btn btn-block' />
            </div>
        </form>
    )
}

export default AddTask
