import FormInput from "./FormInput";

function ItemList({ form, setForm }) {
  const { products } = form;

  const addHandler = () => {
    setForm({
      ...form,
      products: [...products, { name: "", price: "", qty: "" }],
    });
  };

  const changeHandler = (e, index) => {
    const { name, value } = e.target;
    const newProducts = [...products];
    newProducts[index][name] = value;
    setForm({ ...form, products: newProducts });
  };

  const deleteHandler = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setForm({ ...form, products: newProducts });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold ">Purchased Products</h2>
      {products.map((product, index) => (
        <ProductItem
          key={index}
          product={product}
          changeHandler={(e) => changeHandler(e, index)}
          deleteHandler={() => deleteHandler(index)}
        />
      ))}
      <button
        onClick={addHandler}
        className="px-4 py-2 bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors"
      >
        Add Item
      </button>
    </div>
  );
}

function ProductItem({ product, changeHandler, deleteHandler }) {
  return (
    <div className="flex flex-wrap items-end gap-4 sm:space-y-0 p-4 bg-white bg-opacity-10 rounded-lg">
      <FormInput
        name="name"
        label="Product Name"
        type="text"
        value={product.name}
        onChange={changeHandler}
      />
      <FormInput
        name="price"
        label="Price"
        type="text"
        value={product.price}
        onChange={changeHandler}
      />
      <FormInput
        name="qty"
        label="Qty"
        type="number"
        value={product.qty}
        onChange={changeHandler}
      />
      <button
        onClick={deleteHandler}
        className="px-3 py-2 bg-red-500  text-white rounded-lg hover:bg-opacity-80 transition-colors"
      >
        Remove
      </button>
    </div>
  );
}

export default ItemList;

