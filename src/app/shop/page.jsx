import React from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import '../scss/shop.scss'

export default function page() {
  return (
    <>
    <Navbar state={2}/>
    <section className='shop'>
      <section className='shop_info'>
        <div className='shop_info-details'>
          <div className='avatar'>
            <Image src={`/avatar2.jpg`} alt='avatar' priority fill/>
          </div>
          <h2 className='name'>Pelatihan Wisata Edukasia Kasongan</h2>
          <p className='bio'>#Natural</p>
        </div>
        <div className='shop_info-adress'>
          <h2 className='name'>Alamat</h2>
          <p>Jl. Kasongan No.217, Kajen, Bangunjiwo, Kec. Kasihan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55184</p>
        </div>
        <div className='shop_info-contact'>
          <a href='mailto:wisataedukasi797@gmail.com'>wisataedukasi797@gmail.com</a>
          <a target="_blank" href='https://citraceramic.com/'>https://citraceramic.com/</a>
        </div>
      </section>
      <section className='shop_products'>
        <div className='product'>
          <Image className='tag' src={`/green.png`} loading='lazy' width={250} height={250} alt='tag' />
          <div className='product_image'>
            <Image src={`/shop/clock.png`} loading='lazy' fill objectFit='contain' alt='item'/>
          </div>
          <div className='product_info'>
            <h2 className='name'>Jam Kayu Jati</h2>
            <p className='details'>Pelatihan Wisata Edukasia Kasongan - Jl. Kasongan No.217</p>
            <ul>
              <li>Jam dari kayu jati industri pengrajin kayu Kasongan.</li>
              <li>Bahan full kayu jati Kalimantan.</li>
              <li>Warna asli dan jarum hitam.</li>
              <li>Baterai AA.</li>
              <li>Diameter 40 meter</li>
            </ul>
            <h2 className='name price'>Rp174.500</h2>
          </div>
        </div>
        <div className='product'>
          <div className='product_image'>
            <Image src={`/shop/pot.png`} loading='lazy' fill objectFit='contain' alt='item'/>
          </div>
          <div className='product_info'>
            <h2 className='name'>Vas Bunga Gerabah</h2>
            <p className='details'>Pelatihan Wisata Edukasia Kasongan - Jl. Kasongan No.217</p>
            <ul>
              <li>Vas dari gerabah asli pengrajin Kasongan.</li>
              <li>Bahan Gerabah asli Kasongan.</li>
              <li>Bentuk standar dan kuat.</li>
              <li>Produk Baru.</li>
              <li>Diameter terluas 1 meter.</li>
            </ul>
            <h2 className='name price'>Rp98.000</h2>
          </div>
        </div>
      </section>
    </section>
    </>
  )
}

