import { useRef } from 'react';
import { ListWrapper, List, ListContent, ListScroll } from './styles';
import { Heading } from '../Heading';
import { useProducts } from '../../hooks/useProducts';
import { Button } from '../Button';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdStar, MdStarOutline } from 'react-icons/md';
import Rating from '@mui/material/Rating';
import { formatMoney } from '../../utils/formater';
import { SaveLocalCart, getLocalCart } from '../../utils/storage';
import { ProductsInterface } from '../../types/interfaces';

export default function ListItens () {
  const { products } = useProducts();
 
  const carroseul = useRef(null);

  const handleLeftClick = () => {
    carroseul.current.scrollLeft -= carroseul.current.offsetWidth;
  }

  const handleRighClick = () => {
    carroseul.current.scrollLeft += carroseul.current.offsetWidth;
  }

  const addToCart = (item: ProductsInterface) => {
    const cart = getLocalCart();
    SaveLocalCart([ ...cart, item]);
  };

  return (
    <ListWrapper>
      <Heading>Mais vendidos</Heading>
      <List>
       <ListScroll onClick={handleLeftClick}><MdKeyboardArrowLeft size={100} /></ListScroll>
        <ListContent ref={carroseul}>
          {products.map( item => (
            <li key={item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
              <Rating 
                name="rating" 
                size="large"
                defaultValue={item.rating.rate} 
                readOnly
                icon={<MdStar size={20} color="red" />}
                emptyIcon={<MdStarOutline size={20} color="red" />}
              />
              <h2>por {formatMoney(Number(item.price))}</h2>
              <span>ou 10x de {formatMoney(Number(item.price / 10))}</span>
              <Button onClick={addToCart(item)}>Comprar</Button>
            </li>
          ))}
        </ListContent>
        <ListScroll onClick={handleRighClick}><MdKeyboardArrowRight size={100}/></ListScroll>
      </List>
    </ListWrapper>
  )
}