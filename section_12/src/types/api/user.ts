export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  username: string;
  website: string;
  address: {
    city: string;
    street: string;
    suite: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  }
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
}
