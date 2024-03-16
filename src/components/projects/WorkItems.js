import Image from "next/image";
import Link from "next/link";

const WorkItems = ({ item }) => {
    return (
        <div className='work__card' key={item.id}>
            <Image src={item.image} alt='' className='work__img' />
            <div>
                <Link href={item?.url} target="blank"><h3 className='work__title'>{item.title} <i className='bx bx-right-arrow-alt work__button-icon'></i></h3></Link>
                <h3 className='work__title'>{item?.text}</h3>
            </div>
            {/* <h3 className='work__title'>{item.title}</h3> */}
            {/* <a href={item?.url} className='work__button' target="blank">
                Url <i className='bx bx-right-arrow-alt work__button-icon'></i>
            </a> */}
        </div>
    );
};

export default WorkItems;