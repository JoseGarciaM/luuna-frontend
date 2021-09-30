import {useRouter} from 'next/router';
import Base from 'layouts/Base';

export default function Product() {
  const {query} = useRouter();

  return (
    <Base>
      {!query.product[2] && (
        <>
          <div>categoria: {query.product[0]}</div>
          <div>producto: {query.product[1]}</div>
        </>
      )}
      {query.product[2] && (
        <>
          <div>categoria: {query.product[0]}</div>
          <div>subcategoria: {query.product[1]}</div>
          <div>producto: {query.product[2]}</div>
        </>
      )}
    </Base>
  )
}
