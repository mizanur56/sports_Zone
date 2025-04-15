const AddProduct = () => {
  return (
    <div className="max-w-xl mx-auto mt-2 bg-white p-4 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Product</h2>
      <form className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="url"
          name="image"
          placeholder="Image URL"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          name="stockQuantity"
          placeholder="Stock Quantity"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <select
          name="availability"
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="In Stock">In Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>

        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
