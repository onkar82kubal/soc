type Maintenance = {
  maintenance: {
    flat_type: string;
    area: string;
    amount: number;
    late_fee: number;
  }[];
  due_date: string;
  car: number;
  bike: number;
  tenant_car: number;
  tenant_bike: number;
};

export default Maintenance;
