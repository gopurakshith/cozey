
export enum Package {
    ValentinesBox = "Valentines Box",
    BirthdayBox = "Birthday Box",
    ClientGiftBox = "Client Gift Box"
  }

export interface CustomerFormData {
    customerName: string;
    customerAddress: string;
    selectedPackages: Package[];
  }
  