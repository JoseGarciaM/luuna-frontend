import Header from 'components/UI/Header';
import Footer from 'components/UI/Footer';

export default function Landing(props, {categories}) {
  const {children} = props;
  return (
    <>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  )
}
