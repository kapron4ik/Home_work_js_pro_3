/*
  Задание: написать функцию, для глубокой заморозки обьектов.

  Обьект для работы:
  let universe = {
    infinity: Infinity,
    good: ['cats', 'love', 'rock-n-roll'],
    evil: {
      bonuses: ['cookies', 'great look']
    }
  };

  frozenUniverse.evil.humans = []; -> Не должен отработать.

  Методы для работы:
  1. Object.getOwnPropertyNames(obj);
      -> Получаем имена свойств из объекта obj в виде массива

  2. Проверка через typeof на обьект или !== null
  if (typeof prop == 'object' && prop !== null){...}

  Тестирование:

  let FarGalaxy = DeepFreeze(universe);
      FarGalaxy.good.push('javascript'); // false
      FarGalaxy.something = 'Wow!'; // false
      FarGalaxy.evil.humans = [];   // false

*/

const work = () => {
  
  let universe = {
    infinity: Infinity,
    good: ['cats', 'love', 'rock-n-roll'],
    evil: {
      bonuses: ['cookies', 'great look']
    }
  };

  const DeepFreeze = (i)=>{
    // let frozenUniverse = Object.freeze(i);
    Object.freeze(i);

    Object.getOwnPropertyNames(i);
  
    let item = Object.getOwnPropertyNames(i);
  
    for ( let key in item ){
      // console.log(i[item[key]]);
      if (typeof i[item[key]] == 'object' && i[item[key]] !== null){
        Object.freeze(i[item[key]]);
        // console.log(i[item[key]]);
      };
    }
  
    return i

  }
  
  let FarGalaxy = DeepFreeze(universe); //
      // FarGalaxy.good.push('javascript'); // false
      // FarGalaxy.something = 'Wow!'; // false
      // FarGalaxy.evil.humans = [];   // false

  // console.log( FarGalaxy );

}

export default work;
