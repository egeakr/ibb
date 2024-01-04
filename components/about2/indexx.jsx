import Image from 'next/image';
import './styles.css'

const AboutUkome = () => {
    return (
        <div className='container'>
            <div className='text'>
                <div className='title'>
                    <h1>Hakkımızda</h1>
                </div>
                <div className='paragraph'>
                    <p>

                        Etik ilkelerden ödün vermeksizin tüm çalışanlarımız ve yönetim kadromuzla birlikte, sağlıklı çalışma yaşamı koşullarında, kullanıcı tüm paydaşların güvenliği ve memnuniyeti odaklı,      uluslararası kalite standartlarında, hizmette etkinlik, süreklilik, zamanlılık anlayışı ile güvenilir, çevreye duyarlı, ekonomik ve   halkın yaşam kalitesinin yüksek değerde tutulduğu güçlü ve     uygulanabilir bir ulaşım sisteminin planlanmasını, projelendirilmesini, uygulanmasını ve geliştirilmesini esas alarak hizmet sunmaktadır.
                    </p>
                </div>
            </div>
            <div className='image-container'>
                <Image
                    src={"/images/ukm-logo.png"}
                    alt="resim1"
                    width={1300}
                    height={900}
                    className='image1'
                />
            </div>
        </div>
    )
}

export default AboutUkome