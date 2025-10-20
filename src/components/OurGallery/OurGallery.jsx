

import { useState } from 'react'
import OurGalleryCard from '../OurGalleryCard/OurGalleryCard'
import SectionsHeader from '../SectionsHeader/SectionsHeader'
import './OurGallery.css'

const OurGallery = () => {
    const [activeCategory, setActiveCategory] = useState('All')
    const cards = [
    {
    head: 'Classrooms',
    category: 'Classrooms',
    text: 'Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.',
    items: ["/assets/images/Classroom1.jpg" , "/assets/images/Classroom2.jpg" , "/assets/images/Classroom3.jpg" , "/assets/images/Classroom4.jpg"],
    },
    {
    head: 'Library',
    category: 'Library',
    text: 'Our expansive library is a treasure trove of books, fostering a love for reading and supporting students literacy development',
    items: ["/assets/images/Library1.jpg" , "/assets/images/Library2.jpg" , "/assets/images/Library3.jpg" , "/assets/images/Library4.jpg"],
    },
    {
    head: 'Science Lab',
    category: 'Science Lab',
    text: 'Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way.',
    items: ["/assets/images/Science1.jpg" , "/assets/images/Science2.jpg" , "/assets/images/Science3.jpg" , "/assets/images/Science4.jpg"],
    },
    {
    head: 'Computer Lab',
    category: 'Computer Lab',
    text: 'Equipped with age-appropriate technology, the computer lab enhances students digital literacy and computational skills',
    items: ["/assets/images/Computer1.jpg" , "/assets/images/Computer2.jpg" , "/assets/images/Computer3.jpg" , "/assets/images/Computer4.jpg"],
    },
    {
    head: 'Garden and Nature Area',
    category: 'Garden and Nature Area',
    text: 'Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment.',
    items: ["/assets/images/Garden1.jpg" , "/assets/images/Garden2.jpg" , "/assets/images/Garden3.jpg" , "/assets/images/Garden4.jpg"],
    }
    ]
    const categories = ['All', 'Classrooms', 'Library', 'Science Lab', 'Computer Lab', 'Garden and Nature Area']
    return (
        <div className="ourGallery whiteSpacing bGcolor">
            <SectionsHeader Text="Our Gallery"  
            Heading="Our Rooms Gallery"  
            Paragraph="Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school."/>
            <div className="cardsContainer ">
                <div className='buttonsContainer  '>
                    {categories.map((btn, index) => (
                        <button className='smallFS fW600 grey10'
                            key={index}
                            onClick={() => setActiveCategory(btn)}
                            style={{ backgroundColor: activeCategory === btn ? '#FFEFE5' : '#FFFFFF' }}>
                            {btn}
                        </button>
                        ))} 
                    </div>
                    {cards.filter(card => activeCategory === 'All' || card.category === activeCategory)
                        .map((card, index) => (
                        <OurGalleryCard
                            key={index}
                            head={card.head}
                            text={card.text}
                            items={card.items}
                            />
                        ))}
            </div>
        </div>
    )
}

export default OurGallery