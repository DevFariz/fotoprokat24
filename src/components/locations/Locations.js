import "./Locations.scss";

function Locations() {

  const data = [
    {title: 'Фотопрокат Zoom', location: 'Малая Ордынка, 25', link: 'http://zoom-prokat.ru'},
    {title: 'Rental Photo', location: 'Киркорова, 180/1', link: 'http://rentalphoto.com'},
    {title: 'Panasonic Company', location: 'Малая Ордынка, 25', link: 'http://zoom-prokat.ru'},
    {title: 'Торговый Центр', location: 'Киркорова, 180/1', link: 'http://rentalphoto.com'},
  ]

  const items = data.map(({title, location, link}, i) => {

    return (
      <div key={i} className="locations-item">
        <h4 className="locations-title">{title}</h4>
        <p className="locations-place">{location}</p>
        <a href={link} className="locations-link">{link}</a>
      </div>
    )
  })

  return (
    <section className="locations">
      <div className="container">
        <div className="locations-container">
          {items}
        </div>
      </div>
    </section>
  );
}

export default Locations;