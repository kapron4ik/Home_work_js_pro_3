/*
  Задание:

    Написать синглтон, который будет создавать обьект government

    Данные:
    {
        laws: [
        {
          id: 0,
          text: '123123'
        }
      ],
        budget: 1000000
        citizensSatisfactions: 0,
    }

    У этого обьекта будут методы:
      .добавитьЗакон({id, name, description})
        -> добавляет закон в laws и понижает удовлетворенность граждан на -10

      .читатькКонституцию -> Вывести все законы на экран
      .читатьЗакон(ид)

      .показатьУровеньДовольства()
      .показатьБюджет()
      .провестиПраздник -> отнимает от бюджета 50000, повышает удовлетворенность граждан на +5


*/
const _data = {
  laws: [
    {
      id: 0,
      name: 'Закон Ома',
      description: ' эмпирический физический закон, определяющий связь электродвижущей силы источника (или электрического напряжения) с силой тока, протекающего в проводнике, и сопротивлением проводника. Установлен Георгом Омом в 1826 году и назван в его честь'
    },
    {
      id: 1,
      name: 'Закон Ома2',
      description: ' эмпирический физический закон, определяющий связь электродвижущей силы источника (или электрического напряжения) с силой тока, протекающего в проводнике, и сопротивлением проводника. Установлен Георгом Омом в 1826 году и назван в его честь'
    }
  ],
  budget: 1000000,
  citizensSatisfactions: 0,
};

const Method = {
  addLaw: () => {
    let id = document.getElementById('newId');
    let name = document.getElementById('newLaw');
    let description = document.getElementById('newDescription');
    let lawTemp = {
      id: id.value,
      name: name.value,
      description: description.value
    };
    _data.laws.push(lawTemp);
    _data.citizensSatisfactions -= 10;
    id.value = ''; 
    name.value = '';
    description.value = '';
  },
  show: () => {
    let parent = document.getElementById('root')
    parent.innerHTML = ""
    for (let key in _data.laws){
      // let parent = document.getElementById('root');
      let node = document.createElement('div');
      node.innerHTML = `
        <p>id: ${_data.laws[key].id}</p>
        <p>text: ${_data.laws[key].name}</p>
        <p>description: ${_data.laws[key].description}</p>
      `;
      parent.appendChild(node);
    }
  },
  showLaw: () => {
    let id = document.getElementById('findId');
    const filtredToLaws = _data.laws.filter( item => Number(item.id) === Number(id.value) );
    let parent = document.getElementById('root');
    parent.innerHTML = "";
    let node = document.createElement('div');
    node.innerHTML = `
    <p>id: ${filtredToLaws[0].id}</p>
    <p>text: ${filtredToLaws[0].name}</p>
    <p>description: ${filtredToLaws[0].description}</p>
    `;
    parent.appendChild(node);
    id.value = '';
  },
  
  showCitizensSatisfactions: () => {
    let parent = document.getElementById('root');
    parent.innerHTML = "";
    let node = document.createElement('div');
    node.innerHTML = `
    <p>CitizensSatisfactions: ${_data.citizensSatisfactions}</p>
    `;
    parent.appendChild(node);
  },

  showBudget: () => {
    let parent = document.getElementById('root');
    parent.innerHTML = "";
    let node = document.createElement('div');
    node.innerHTML = `
    <p>Budget: ${_data.budget}</p>
    `;
    parent.appendChild(node);
  },

  holdHolidey: () => {
    _data.citizensSatisfactions += 5;
    _data.budget -= 50000;
    let parent = document.getElementById('root');
    parent.innerHTML = "";
    let node = document.createElement('div');
    node.innerHTML = `
    <p>CitizensSatisfactions: ${_data.citizensSatisfactions}</p>
    <p>Budget: ${_data.budget}</p>
    `;
    parent.appendChild(node);
  }

}

Object.freeze(Method);

export default Method;
