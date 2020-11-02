export class User  {
    id:string;
    first_name:string;
    other_names:string;
    address:Address;
    mobile:string;
    email:string;
    company:string;
    preferences : Preferences;
}

export class Address  {
    street:string;
    town: string;
    county: string;
    postcode: string;
}

export class Preferences{
    contact : string []
}