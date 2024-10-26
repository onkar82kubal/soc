type SocietyProfile = {
  society_photo: string;
  amenities: {
    amenity_name: string;
    amenity_type: string;
    payment_type: string;
    payment_charge: number;
  }[];
  commitee_members: {
    member_name: string;
    role_type: string;
    contact_number: number;
    contact_email: string;
  }[];
};

export default SocietyProfile;
