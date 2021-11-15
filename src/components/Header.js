import PropTypes from 'prop-types'
import Botao from './Botao';

const Header = ({ title, onAdd, showAdd }) => {

  return(
    <header className='header'>
        <h1>{title}</h1>
        <Botao cor={showAdd ? 'red' : 'green'} texto={showAdd ? 'Fechar' : 'Novo'} onClick={onAdd}/>
    </header>
  );
}

Header.defaultProps = {
    title: 'Tarefas',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;
