function WaterForm({ formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="flex flex-1 items-center my-36">
      <form action="" className="flex flex-col md:grid md:grid-cols-2 gap-20">
        <div className="row-span-2 flex flex-col gap-3">
          <h3 className="text-3xl font-bold">Shower</h3>
          <label className="flex flex-col gap-2">
            How often do you shower a week?
            <input
              onChange={handleChange}
              value={formData.showers_per_week}
              type="number"
              name="showers_per_week"
              className="rounded-full text-gray-900 py-2 px-4 "
            />
          </label>
          <label className="flex flex-col gap-2">
            How long do you shower?
            <input
              onChange={handleChange}
              value={formData.shower_minutes}
              type="number"
              name="shower_minutes"
              className="rounded-full text-gray-900 py-2 px-4 "
            />
          </label>
          <label className="flex flex-col gap-2">
            What is your shower head type?
            <select
              onChange={handleChange}
              type="text"
              value={formData.shower_head_type}
              name="shower_head_type"
              className="rounded-full text-gray-900 py-2 px-4 "
            >
              <option disabled value=""></option>
              <option value="efficient">Efficient</option>
              <option value="regular">Regular</option>
              <option value="inefficient">Inefficient</option>
            </select>
          </label>
        </div>

        <div className="col-span-1 flex flex-col gap-3">
          <h3 className="text-3xl font-bold">Toilet</h3>
          <label className="flex flex-col gap-2">
            How often do you flush the toilet a day?
            <input
              onChange={handleChange}
              value={formData.flushes_per_day}
              type="number"
              name="flushes_per_day"
              className="rounded-full text-gray-900 py-2 px-4 "
            />
          </label>
          <label className="flex flex-col gap-2">
            What is your toilet type?
            <select
              onChange={handleChange}
              value={formData.toilet_type}
              type="text"
              name="toilet_type"
              className="rounded-full text-gray-900 py-2 px-4 "
            >
              <option disabled value=""></option>
              <option value="efficient">Efficient</option>
              <option value="regular">Regular</option>
              <option value="inefficient">Inefficient</option>
            </select>
          </label>
        </div>

        <div className="col-span-1 flex flex-col gap-3">
          <h3 className="text-3xl font-bold">Laundry</h3>
          <label className="flex flex-col gap-2">
            How many times do you wash laundry a week?
            <input
              onChange={handleChange}
              value={formData.loads_per_week}
              type="number"
              name="loads_per_week"
              className="rounded-full text-gray-900 py-2 px-4 "
            />
          </label>
          <label className="flex flex-col gap-2">
            What is your laundry machine type?
            <select
              onChange={handleChange}
              value={formData.laundry_machine_type}
              name="laundry_machine_type"
              className="rounded-full text-gray-900 py-2 px-4 "
            >
              <option disabled value=""></option>
              <option value="efficient_top_load">Efficient Top-load</option>
              <option value="efficient_front_load">Efficient Front-load</option>
              <option value="top_load">Top-load</option>
            </select>
          </label>
        </div>
      </form>
    </div>
  );
}

export default WaterForm;
