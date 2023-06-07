export interface Employee {
  fullName: string;
  id: number;
  phoneNumber: string;
  gender: string; // Переделать
  birthDate: Date;
  metro: string;
  address: string;
  //
  bank: string;
  paymentСard: string;
  //
  citizenship: string;
  passport: number; // ?
  issuedBy: string;
  validTill: Date;
  birthplace: string;
  registration: string;
  patent?: string;
  patentValidDate?: Date;
  snils?: string;
  inn?: string;
  medicalBook?: string;
  position: string;
  unit: string;
  decision: string;
  source?: string;
  date: string;
  note: string;
}
