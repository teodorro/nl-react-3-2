import "../css/main.css";
import IItem from './IItem.ts';

type Props = { items: IItem[]}

export default function Listing(data: Props) {
  const items = data.items.filter((item) => item.state === 'active');
  return (
    <div className="item-list">
      {items.map((item) => (
        <div className="item" key={item.listing_id}>
          <div className="item-image">
            <a href={item.url}>
              <img src={item.MainImage?.url_570xN} alt={item.title}/>
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{item.title}</p>
            <p className="item-price">{getPrice(item.price, item.currency_code)}</p>
            <p className={`item-quantity ${getLevel(item.quantity)}`}>{item.quantity} left</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function getPrice(price: string, currencyCode: string) {
  switch (currencyCode) {
    case 'USD':
      return `$${price}`;
    case 'EUR':
      return `€${price}`;
    case "GPB":
      return `${price} ${currencyCode}`;
    default:
      return `${price} ${currencyCode}`;
  }
}

function getLevel(quantity: number) {
  if (quantity == null) {
    return '';
  }
  if (quantity <= 10) {
    return 'level-low';
  } else if (quantity <= 20) {
    return 'level-medium';
  } else {
    return 'level-high';
  }
}
