import "./Search.scss"

function Search(props) {
  return (
    <div className="search">
      <h2 className="search-title title">
        Вы <span>ищете</span> что-то конкретное?
      </h2>
      <p className="search-text">
        Проект <span>Fotoprokat24</span> является агрегатором предложений всех фотопрокатов Москвы и служит для Вашего удобства. Выберете необходимую категорию, либо начните поиск по названию. Оформив заказ, Вы сможете забрать его из Пункта Выдачи, либо заказать доставку в любую точку Москвы.
      </p>
      <div className="search-btns">
        <button className="search-all green-btn">Перейти в Каталог</button>
        <button className="search-start white-btn">Приступить к поиску</button>
      </div>
    </div>
  );
}

export default Search;