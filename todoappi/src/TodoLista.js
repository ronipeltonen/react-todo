import TodoIteemi from './TodoIteemi';

function TodoLista(props) {
    return (
        <div>
            {props.iteemit.map(
                (x) => <TodoIteemi otsikko={x.otsikko}/>
            )}
        </div>
    );
}

export default TodoLista;
