type AddMemberForm = {
  flat_number: string;
  wing_name: string;
  flat_type: string;
  area: string;
  occupation_type: string;
  owners_details: {
    name: string;
    contact: string;
    email: string;
    relation: string;
  }[];
  tenant_name: string;
  tenant_contact: string;
  tenant_email: string;
  family_members: string;
  rent_agreement: string;
  parking_details: {
    vehicle: string;
    parking_slot: string;
    vehicle_number: string;
    rc_book: string;
  }[];
};

export default AddMemberForm;
