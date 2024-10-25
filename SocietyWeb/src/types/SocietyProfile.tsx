type SocietyProfile = {
  society_photo: string;
  amenities: {
    amenity_name: string;
    amenit_type: string;
    payment_type: string;
    payment_charge: number;
  }[];
  commitee_member: {
    member_name: string;
    role_type: string;
    contact_number: number;
    contact_email: string;
  }[];
};

export default SocietyProfile;
