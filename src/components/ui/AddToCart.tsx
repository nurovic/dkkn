
function AddToCart() {
  return (
    <button
    className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors"
    onClick={(e) => {
      e.preventDefault();
     /* onAddToCart(id); */
    }}
  >
    Sepete Ekle
  </button>
  )
}

export default AddToCart
