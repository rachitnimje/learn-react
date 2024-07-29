import './App.css'
import Card from '../Components/Card'

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-gray-700 rounded-full p-1'>Macbooks</h1>
      <div className='flex'>
        <Card title='Macbook Air 15"' price="₹134900" btnText="Amazon" specs="
                Apple M3 chip |
                8-core CPU with 4 performance cores and 4 efficiency cores |
                10-core GPU |
                Hardware-accelerated ray tracing |
                16-core Neural Engine |
                100GB/s memory bandwidth"
        />

        <Card title='Macbook Pro 16"' price="₹189900" btnText="Apple Official" specs="
                Apple M3 Pro chip |
                12-core CPU |
                18-core GPU |
                36GB Unified Memory |
                512GB SSD Storage¹  |
                41.05 cm (16.2″) Liquid Retina XDR display² |
                Force Touch trackpad |
                140W USB-C Power Adapter"
        />

        <Card title='Macbook Pro 16"' price="₹399900" specs="
                Apple M3 Max chip |
                16-core CPU |
                40-core GPU |
                48GB Unified Memory |
                1TB SSD Storage¹ |
                41.05 cm (16.2″) Liquid Retina XDR display² |
                Force Touch trackpad |
                140W USB-C Power Adapter"
        />
      </div>
    </>
  )
}

export default App
