type Address = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
        lat: string,
        lng: string,
    }
};

type Company = {
    name: string,
    catchPhrase: string,
    bs: string,
};

export type SingleUser = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string,
    website: string,
    company: Company,
};

export type UserList = SingleUser[];

export type SingleUserAlbum = {
    userId: number,
    id: number,
    title: string,
};

export type UserAlbumList = SingleUserAlbum[];

type Album = {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string,
};

export type AlbumList = Album[];
