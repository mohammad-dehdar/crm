import FormInput from "./FormInput";
import ItemList from "./ItemList";

function Form({ form, setForm }) {
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormInput
                    name="name"
                    label="Name"
                    type="text"
                    value={form.name}
                    onChange={changeHandler}
                />
                <FormInput
                    name="lastName"
                    label="Last Name"
                    type="text"
                    value={form.lastName}
                    onChange={changeHandler}
                />
                <FormInput
                    name="email"
                    label="Email"
                    type="email"
                    value={form.email}
                    onChange={changeHandler}
                />
                <FormInput
                    name="phone"
                    label="Phone"
                    type="tel"
                    value={form.phone}
                    onChange={changeHandler}
                />
                <FormInput
                    name="address"
                    label="Address"
                    type="text"
                    value={form.address}
                    onChange={changeHandler}
                />
                <FormInput
                    name="postalCode"
                    label="Postal Code"
                    type="text"
                    value={form.postalCode}
                    onChange={changeHandler}
                />
                <FormInput
                    name="date"
                    label="Date"
                    type="date"
                    value={form.date}
                    onChange={changeHandler}
                />
            </div>
            <ItemList form={form} setForm={setForm} />
        </div>
    );
}

export default Form;
