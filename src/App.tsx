import { useState } from 'react';
import * as C from './App.styles';
import { IItem } from './interface/Item';
import { ListItem } from './components/ListeItem';
import { AddArea } from './components/AddArea';

const App = () => {
  const [list, setList] = useState<IItem[]>([
    {id: 1, name: 'Comprar pão na padaria', done: false},
    {id: 2, name: 'Comprar um bolo na padaria', done: true},
  ]);

  const handleAddTask = (taskname: string) => {
    let newlist = [...list];
    newlist.push({
      id: list.length + 1,
      name: taskname,
      done: false
    });
    setList(newlist);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        {/* área para adicionar nova tarefa */}

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem key={index} item={item}/>
        ))}
        

      </C.Area>
    </C.Container>

  );
}

export default App;