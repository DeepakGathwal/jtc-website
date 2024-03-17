import Link from 'next/link';
import Image from 'next/image';
const Megamenu = ({ categories, cources, setActiveTab, activeTab, setMegaMenu }) => {
    const handleTabMouseEnter = (id) => {

        setActiveTab(id);
    };
    return (
        <>
            <div className="mega-menu row-flex" onMouseLeave={(e) => setMegaMenu(false)}>
                <div className="column-flex course-hover">
                    <ul>
                        {categories && categories.map((el, i) => (
                            <>
                                <li key={i} id={el.id} onMouseEnter={() => handleTabMouseEnter(el.id)}><Link href="/">{el.category}</Link></li>
                            </>
                        ))}
                    </ul>
                </div>
                <div className="row-flex hover-results" id="contentOne" style={{ display: activeTab == activeTab ? 'flex' : 'none' }}>
                    {cources && cources.map((el, o) => (

                        <div key={o} className="course-card">
                            <Link href={'/course/' + el.link} className="cardlinks column-flex">
                                <Image src={el.icon} alt={el.name} width={20} height={20} className="courseIcon" />
                                <h3>{el.name}</h3>
                                <div className="details">
                                    <span className="info">{el.name}</span>
                                </div>
                            </Link>
                        </div>

                    ))}

                </div>

            </div></>
    )
}
export default Megamenu;