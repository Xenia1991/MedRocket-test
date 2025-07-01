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

type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string,
    website: string,
    company: Company,
};

type UserList = User[];

type UserAlbum = {
    userId: number,
    id: number,
    title: string,
};

type UserAlbumList = UserAlbum[];

type Album = {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string,
};

type AlbumList = Album[];

export {
    UserList,
    UserAlbumList,
    UserAlbum,
};