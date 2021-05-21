export interface UsersResults {
  results: [Users];
}

export interface Users {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      name: string;
      number: number;
    };
    city: string;
    state: string;
    postcode: string;
    coordinates: {
      latitude: string;
      longitude: string;
    },
    timezone: {
      offset: string;
      description: string;
    }
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: 26
  };
  registered: {
    date: string;
    age: 17
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;

}

