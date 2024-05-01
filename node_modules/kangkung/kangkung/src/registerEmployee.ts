/* eslint-disable prettier/prettier */
export enum education {
    SMA = 'Sma',
    SMP = 'Smp',
    SD = 'Sd',
  }
  
  export const regisData: Data = {
    register: [
      {
        id: 'uuid11',
        name: 'Burhan',
        birthday: new Date(),
        address: 'Kp Rambutan',
        education: education.SMA,
      },
      {
        id: 'uuid12',
        name: 'Rita',
        birthday: new Date(),
        address: 'Kp sawo',
        education: education.SMP,
      },
      {
        id: 'uuid13',
        name: 'Hani',
        birthday: new Date(),
        address: 'Kp Pisang',
        education: education.SD,
      },
    ],
  };
  
  interface Data {
    register: {
      id: string;
      name: string;
      birthday: Date;
      address: string;
      education: education;
    }[];
  }