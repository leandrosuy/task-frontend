import PropTypes from 'prop-types'
const Botao = ({ cor, texto, onClick }) => {

    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: cor }}
            className='btn'>
            {texto}
        </button>
    )
}

Botao.defaultProps = {
    color: 'steelblue'
}

Botao.propTypes = {
    texto: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Botao;
