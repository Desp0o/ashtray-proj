import ProductSection from '../components/ProductSection'
import SecondSection from '../components/SecondSection'
import Slider from '../components/Slider'

const Main = () => {
  return (
    <main className='pb-[100px]'>
        <Slider />

      <div className='mt-[96px]'></div>
        <SecondSection />

        <div className='mt-[96px]'></div>
        <ProductSection />
    </main>
  )
}

export default Main