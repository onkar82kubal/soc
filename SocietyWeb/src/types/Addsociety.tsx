type AddsocietyForm = {
  society_name: string;
  no_gates: number;
  no_floors: number;
  no_flats: number;
  wing_name: string;
  address: string;
  region: string;
  city: string;
  pincode: number;
  primary_contact: number;
  primary_email: string;
  date_onboarding: string;
  refered_by: string;
  monthly_charges: number;
};

export default AddsocietyForm;
