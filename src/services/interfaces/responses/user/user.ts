export interface Entity {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}

interface Token {
    iss: string,
    azp: string,
    aud: string,
    sub: string,
    hd: string,
    email: string,
    email_verified: string,
    nbf: string,
    name: string,
    picture: string,
    given_name: string,
    family_name: string,
    iat: string,
    exp: string,
    jti: string,
    alg: string,
    kid: string,
    typ: string
}