import Image from 'next/image';
import img from '../public/photo1.avif';

const imageList = ["photo1", "photo2", "photo3", "photo4", "photo5"]

const FoodsPage = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }} >
            {
                imageList.map((path) => {
                    return (
                        <section key={path} >
                            {/* <img src={`/${path}.avif`} alt={path} width="280" height="420" /> */}
                            <Image src={`/${path}.avif`} alt={path} width="280" height="420" priority />
                        </section>
                    )
                })
            }
            <Image src={img} placeholder="blur" alt="test" width="380" height="220" priority />
        </div>
    )
}

export default FoodsPage