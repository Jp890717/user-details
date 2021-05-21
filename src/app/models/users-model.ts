export interface Users {
  results: [{
    gender: string;
    name: {
      first: string;
      last: string;
    };
    location: {
      street: {
        name: string;
        number: number;
      };
      city: string;
    };
    email: string;
    login: {
      password: string;
    };
    dob: {
      date: string;
    };
    cell: string;
    picture: {
      large: string
    };
  }];
}

