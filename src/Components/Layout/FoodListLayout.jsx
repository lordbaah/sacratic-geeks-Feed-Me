import React, { useState, useEffect } from 'react';
import Card from "../Card/Card";
import foodData from '../../data/meals.json';
import Modal from '../Modal/Modal';
import InputBox from '../Inputbox/InputBox';

const FoodListLayout = () => {
  const [foods, setFoods] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ id: null, name: '', ingredients: [] });
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setFoods(foodData);
  }, []);

  // Get unique categories
  const categories = ['All', ...new Set(foods.map(food => food.type))];

  const filteredFoods = foods.filter(food =>
    (activeCategory === 'All' || food.type === activeCategory) &&
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  const visibleFood = showAll ? filteredFoods : filteredFoods.slice(0, 20); // Display first 20 food initially

  // modal function
  const handleOpenModal = (id, name, ingredients) => {
    setModalContent({ id, name, ingredients });
    setModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <section>
      <div className='custom-screen mt-6'>
        <div className="w-full flex flex-col items-center">
          <InputBox setSearchTerm={setSearchTerm}/>

          <div className="flex gap-4 flex-wrap mb-6">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded ${
                  activeCategory === category
                    ? 'bg-btn-bg text-custom-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className='w-full mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {visibleFood.map((food) => (
              <Card 
                key={food.id} 
                Foodid={food.id} 
                name={food.name} 
                category={food.type} 
                ingredients={food.ingredients}
                onOpenModal={handleOpenModal}
              />
            ))}
          </div>
          {filteredFoods.length > 20 && (
              <button onClick={() => setShowAll(!showAll)} className="bg-btn-bg text-custom-white text-sm py-2 px-4 rounded mt-4">
                {showAll ? 'View Less' : 'View More'}
              </button>
            )}
        </div>

        {modalOpen && (
            <Modal modalContent={modalContent} handleCloseModal={handleCloseModal}/>
        )}
      </div>
    </section>
  )
}

export default FoodListLayout;