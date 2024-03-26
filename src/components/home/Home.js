import Image from 'next/image';
import Data from './Data';
import './home.css'
import ScrollDown from './ScrollDown';
import Social from './Social';
import ProfileImg from "/public/assets/profile10.jpg";

const Home = () => {

    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social />
                    {/* <div className="home__img"></div> */}
                    <div className='profile__img'>
                    <Image src={ProfileImg} alt="" className="" width={300} height={300} />
                    </div>
                    <Data />
                </div>
                <ScrollDown />
            </div>
        </section>
    );
}

export default Home;