json.array!(@vendors) do |vendor|	
  json.name vendor.name
  json.contact_person vendor.contact_person
  json.address vendor.address
end