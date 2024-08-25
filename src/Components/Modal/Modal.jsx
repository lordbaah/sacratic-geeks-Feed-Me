
const Modal = ({modalContent,handleCloseModal}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-custom-white p-6 rounded-lg max-w-md w-[90%]">
            <h2 className="text-2xl font-bold mb-4">{modalContent.name}</h2>
            <h3 className="text-xl font-semibold mb-2">Ingredients:</h3>
            <ul className="list-disc pl-5 mb-4">
                {modalContent.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <button 
                className="bg-btn-bg text-custom-white py-2 px-4 rounded"
                onClick={handleCloseModal}
            >
                Close
            </button>
        </div>
  </div>
  )
}

export default Modal
