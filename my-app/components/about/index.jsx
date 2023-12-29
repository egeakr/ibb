import React from 'react'
import Image from 'next/image'
import './styles.css'
import resim1 from '../../public/images/ibb-kariyer-hakkimizda-1.jpg'
import resim2 from '../../public/images/ibb-kariyer-hakkimizda-2.jpg'
import resim3 from '../../public/images/ibb-kariyer-hakkimizda-3.jpg'
import resim4 from '../../public/images/ibb-kariyer-hakkimizda-4.jpg'
const Hakkimizda = () => {
    return (
        <div className='container'>
            <div className='text'>
                <h1 className='title'>Hakkımızda</h1>
                <p>İstanbul Büyükşehir Belediyesi’nin 6 ana sektörde faaliyet gösteren tüm iştirakleri için iş başvuruları “kariyer.ibb.istanbul” üzerinden alınıyor. <br /> <br />

                    İş arayan ve İstanbul Büyükşehir Belediyesi iştiraklerinde çalışmak isteyen vatandaşlarımız için kurulan “kariyer.ibb.istanbul” web sitesi yeni ara yüzüyle siz değerli vatandaşlarımızın kullanımına sunuldu. Sitemiz üzerinden CV oluşturarak kendinize uygun iş ilanlarını takip edebilir ve başvurularınızı gerçekleştirebilirsiniz. Yapılan başvurular, uzman insan kaynakları ekiplerimiz tarafından değerlendiriliyor ve belirlenen kriterlere uygun adaylar mülakatlara davet ediliyor. Mülakat süreci olumlu seyreden adaylara iştiraklerimiz tarafından iş teklifinde bulunuluyor. Mülakat süreci olumlu sonuçlanamayan adaylar ise oluşabilecek yeni pozisyonlar için tekrar değerlendirilmek üzere veri tabanında muhafaza ediliyor. <br /> <br />

                    İlanlarımız, iştirak şirketlerinin oluşan personel ihtiyaçları doğrultusunda yayına alınmaktadır. Belirli bir süre yayında kalan ilanlar, yeterli başvuru sayısına ulaşıldıktan sonra yayından kalkmaktadır. <br /><br />
                    Bu süre zarfında kendinize uygun olduğunu düşündüğünüz ilanlara başvurmanızı ve diğer yayınlanacak uygun ilanlar için de sitemizi düzenli olarak takip etmenizi öneririz. <br /><br />
                </p>
            </div>
            <div className="image-container">
                <div>
                    <Image
                        src={resim1}
                        width={584}
                        height={584}
                        alt="Picture of the author"
                    />
                </div>
                <div className='images-right'>
                    <div className='images-right1'>
                        <Image
                            src={resim2}
                            width={584}
                            height={279.66}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='images-bottom'>
                        <div >
                            <Image
                                src={resim3}
                                width={276}
                                height={276}
                                alt="Picture of the author"
                            />
                        </div>
                        <div>
                            <Image
                                src={resim4}
                                width={276}
                                height={276}
                                alt="Picture of the author"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hakkimizda