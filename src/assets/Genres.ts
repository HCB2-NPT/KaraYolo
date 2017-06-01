export class Genres {
    private genres = [];

    constructor() {
        this.genres = [
            {
                id: 1,
                name: 'All'
            },
            {
                id: 2,
                name: 'Bolero'
            },
            {
                id: 3,
                name: 'Cai Luong (Reformed Theatre)'
            },
            {
                id: 4,
                name: 'Pop & Ballads'
            },
            {
                id: 5,
                name: 'Rap'
            },
            {
                id: 6,
                name: 'Trinh Cong Son'
            },
            {
                id: 7,
                name: 'US-UK'
            }
        ];
    }

    getGenres() {
        return this.genres;
    }
}
