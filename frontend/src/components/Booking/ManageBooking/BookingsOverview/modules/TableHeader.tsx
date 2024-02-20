function TableHeader() {
  return (
    <>
      <thead className="bg-blue-800 text-xs uppercase text-slate-100">
        <tr>
          <th scope="col" className="px-3 py-3 text-center">
            <span className="hidden md:block">Status</span>
          </th>
          <th scope="col" className="py-3">
            User
          </th>
          <th scope="col" className="py-3">
            <span className="hidden md:block">Bike Type</span>
          </th>
          <th scope="col" className="py-3">
            Bikes
          </th>
          <th scope="col" className="py-3 text-center">
            Actions
          </th>
        </tr>
      </thead>
    </>
  )
}

export default TableHeader