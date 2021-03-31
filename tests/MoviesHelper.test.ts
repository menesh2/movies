import {Movie} from "../src/components/MovieCard";
import {findMovieByID, searchMoviesForName} from "../src/utils/MoviesHelper";


describe('searchForName', () => {
    let mockedMovies: Movie[] = [];

    beforeEach(() => {
        mockedMovies =  [
            {
                "id": "207856",
                "title": "2001: A Space Odyssey",
                "image": "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABd8H3yW84QBZ7bXkGlzSmeKjpS8gUEV7S_zPN4qVOX7mQ0SNpyHlOkh0WGGlrARjpOZPFlZXyU4t5E8phADO9rq80g.jpg?r=43c",
                "synopsis": "While investigating the appearance of mysterious monoliths throughout the universe, two astronauts battle their ship&#39;s intelligent computer system.<br><b>New on 2020-06-18</b>",
                "rating": "8.3",
                "type": "movie",
                "released": "1968",
                "runtime": "2h28m",
                "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABbjUFYCF6qVcxBNZXhL_HIGhaNXLosDyYyg6v3WP9H1FLsGMBtJx1uy9R8pEMgz0gGzPLlcF9lgH5WjpB_jl4p6DmlDw.jpg?r=43c",
                "unogsdate": "2020-06-18",
                "imdbid": "tt0062622",
                "download": "0"
            },
            {
                "id": "215318",
                "title": "Ace Ventura: When Nature Calls",
                "image": "https://occ-0-1926-41.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABd2CXwqVibqQ6X3SBFL7ADm7zczv73tuNxCW2zDwA-4SEW5Nkdfnybwn5MXfVE1fHv4IBxtpYBkjF3EZQoqHKWkHkA.jpg?r=914",
                "synopsis": "Ace travels to the jungles of Africa to recover a rare white bat. But if he fails, a war with the violent Wachootoo tribe is sure to follow.<br><b>New on 2020-06-18</b>",
                "rating": "6.4",
                "type": "movie",
                "released": "1995",
                "runtime": "1h34m",
                "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABcAF9ZyRlOXNySt7A9ll31tYwgxUVPVtznPAqkz1L_R9iTfkyHQHK1w-3Kz0RKlXfl4KoWtU1nWkIO-dcjz1k-RYFE-6.jpg?r=914",
                "unogsdate": "2020-06-18",
                "imdbid": "tt0112281",
                "download": "1"
            },
            {
                "id": "234365",
                "title": "Against All Odds",
                "image": "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABQLRgUUEW1ERizQ0QVFwll7ldXWFoWGHUJ0wh3fJkp9URt6FSKMpSyitgnrc5qYufG_SHlL530HaRnxVZsyKL1uiDg.jpg?r=603",
                "synopsis": "An ex-football player agrees to track down a sleazy nightclub owner&#39;s mistress -- but when he finds the elusive woman in Mexico, he falls in love.<br><b>New on 2020-06-18</b>",
                "rating": "5.9",
                "type": "movie",
                "released": "1984",
                "runtime": "2h1m",
                "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABXIMhbibi12RBdfyOzXCHGhv-M4U5HJZxWy3P8C3b5HO-3yO_Nnpwr8RZP7fwzyMAv2XrMO-a6CXLVKFqi6JZYO9QYJU.jpg?r=603",
                "unogsdate": "2020-06-18",
                "imdbid": "tt0086859",
                "download": "1"
            },
            {
                "id": "18002692",
                "title": "American History X",
                "image": "https://occ-0-1926-41.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABet1M0odJ5zjsEwRnDSs-Kj_vi5WZC-9SH7lraHwERvmUuErGWd0neKOtWlcAi9tLlfJfwMJw4kraZsHyfWlG-PqnA.jpg?r=e28",
                "synopsis": "A neo-Nazi gets sent to prison for murder and comes out a changed man. But can he prevent his younger brother from following in his footsteps?<br><b>New on 2020-06-18</b>",
                "rating": "8.5",
                "type": "movie",
                "released": "1998",
                "runtime": "1h58m",
                "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABbHt3NoFOvz3C4W44SvcUcNulmJZV6LpOj0P81LNU1I5VmtJkFnLz9fiz_gA71vaDytjDqocpe1ay7FJS3-mn5kvS4VT.jpg?r=e28",
                "unogsdate": "2020-06-18",
                "imdbid": "tt0120586",
                "download": "0"
            },
            {
                "id": "60000880",
                "title": "28 Days",
                "image": "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABeHQaPEL1acetO9i5uD_8MOETxbr3yKdYzFhPzXmCRxB5yB6t2MD2JCJyvpi8BmPYfwtbwCZlTWWeA10-i-fbNE11Q.jpg?r=c89",
                "synopsis": "After her drunken antics result in property damage, an alcoholic journalist enters rehab -- and soon meets a fellow resident who changes her outlook.<br><b>New on 2020-06-18</b>",
                "rating": "6",
                "type": "movie",
                "released": "2000",
                "runtime": "1h43m",
                "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABXaIScp1HGn2XPV82ivaARKyiMXJ0XN6FlgOe3tj1NM08vOc-ZUqCeQoXUHIWD4paV4xL3lj_Ez9kpfNvvQZKxNnn_tW.jpg?r=c89",
                "unogsdate": "2020-06-18",
                "imdbid": "tt0191754",
                "download": "1"
            },
            {
                "id": "60001801",
                "title": "Alexandria ... Why?",
                "image": "https://occ-0-768-769.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABcWlKXh6yeFKLwyLydH8C-jX47eCNCHvEjj8nQv6tYdBvwcrpw-Kgp-cj7h5prXAsA3EoT4G_c2lfIVohhZfwkvWmQ.jpg?r=3c0",
                "synopsis": "Living in Alexandria during World War II, an Egyptian teen enamored with American films dreams of making it in Hollywood.<br><b>New on 2020-06-18</b>",
                "rating": "",
                "type": "movie",
                "released": "1979",
                "runtime": "2h11m",
                "largeimage": "https://occ-0-2705-2706.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABdjwMEYmUDZBWnbMrWNl9lu8KtfwIhsh1RtT8VCguNHO7ceB5Jq1fpbw5JT0wtJVABatokA8Ol086UwT9c5BR2mq5HrR.jpg?r=f8f",
                "unogsdate": "2020-06-18",
                "imdbid": "",
                "download": "0"
            },
            {
                "id": "60001803",
                "title": "Alexandria: Again and Forever",
                "image": "https://occ-0-768-769.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABcgOH1Rh9fuG_PQcc6gQSa74CutPlqlXPreH5-luT_yIRVjz1hyYLNXbdnpWUF1hBCtM6adwn41umryqveMJ05bqGA.jpg?r=8c7",
                "synopsis": "At the peak of his career, Yehia joins a hunger strike, becomes smitten and reckons with a creative crisis &mdash; but finds a new muse.<br><b>New on 2020-06-18</b>",
                "rating": "",
                "type": "movie",
                "released": "1989",
                "runtime": "1h49m",
                "largeimage": "https://occ-0-2705-2706.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABf0WbQTW_smSdXEqGX-XQMBiNv1EkjMc4X-8uwkwe3fwmK-4AKSAy5I6-ml0FsXAiePG2KHM8mgvX81DVrtCquqfRLJj.jpg?r=0a0",
                "unogsdate": "2020-06-18",
                "imdbid": "",
                "download": "0"
            },
            {
                "id": "60002273",
                "title": "Along Came a Spider",
                "image": "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABaulisu8YTwZbJxsJPQWfrX5ihDrsnTqAjomyyodEcbu4vNJQq-DkvhOqL3J3NPqAOb7dhPuw7h7ir_MreCL0Tzwhg.jpg?r=d2f",
                "synopsis": "When a girl is kidnapped from a prestigious prep school, a homicide detective takes the case, teaming up with young security agent.<br><b>New on 2020-06-18</b>",
                "rating": "6.4",
                "type": "movie",
                "released": "2001",
                "runtime": "1h43m",
                "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABZ51dexFQSmqtj9o7icMN9KQxOX_6X5iKom8Dve9pZuzhqEnx738Fu2u5X4_XLNpDIQsU7M-2weiz8HiL2RBIDekH42w.jpg?r=d2f",
                "unogsdate": "2020-06-18",
                "imdbid": "tt0164334",
                "download": "0"
            },
            {
                "id": "60020681",
                "title": "Angel Eyes",
                "image": "https://occ-0-114-116.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABadHdWYsV2FwW7UfqVlwomKGrJ7atIA-DJCREWLmaWY0dP6UkehYv6W_fwRy4alZkAZBdvQckeQiwGDaE_1bRKv3ww.jpg?r=915",
                "synopsis": "When a violent assault leaves her vulnerable, a streetwise Chicago cop receives help from a haunted loner who&#39;s struggling with traumas of his own.<br><b>New on 2020-06-18</b>",
                "rating": "5.6",
                "type": "movie",
                "released": "2001",
                "runtime": "1h42m",
                "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABW_zO3-lMcf3WjJ4Hki8uUAgMbAlCYj3TjQSNe6N9fGQdQFxaWSo48B6V6Vy8Hx8bhag-fxejhhVK7YNrKG6wh41o9Et.jpg?r=d58",
                "unogsdate": "2020-06-18",
                "imdbid": "tt0225071",
                "download": "0"
            },
            {
                "id": "60027713",
                "title": "2 Fast 2 Furious",
                "image": "https://occ-0-2717-360.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABcPADEjySdmCNxJrnX6owPs92K-0NGAtcYnmtpNLqNsQTXglXWyTSo9MDTxUKFAYoEILjhAM0gNbxzanxRGjCoCc5g.jpg?r=ae6",
                "synopsis": "It&#39;s a major double-cross when former cop Brian teams up with his ex-con buddy to transport a shipment of &#39;dirty&#39; money for a shady importer-exporter.<br><b>New on 2020-06-18</b>",
                "rating": "5.9",
                "type": "movie",
                "released": "2003",
                "runtime": "1h47m",
                "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABXWi8cWleYPwFmSJYzCdu4b8EalVrXaprZQvOgoA41Oau4m0IxZ8gEipVc0tNUxtdMaDT2zDMvNfJAeQU-MeXs3ky2l3.jpg?r=ae6",
                "unogsdate": "2020-06-18",
                "imdbid": "tt0322259",
                "download": "1"
            }]
    });

   describe('empty string as search word', () => {
       test('returns the full movies array', () => {
           //arrange
           const emptySearchText = ''
           //act
           const result = searchMoviesForName(mockedMovies, emptySearchText);

           //assert
           expect(result).toEqual(mockedMovies);

       })
   });

    describe('search key without matches', () => {
        test('returns an empty array', () => {
            //arrange
            const nonExistingName = 'non exiting name';

            //act
            const result = searchMoviesForName(mockedMovies, nonExistingName);

            //assert
            expect(result).toEqual([]);
        })
    });

    describe('search key with matches', () => {
        test('returns only the matching movies', () => {
            //arrange
            const uniqueTitle = "12345678";
            mockedMovies[0].title = uniqueTitle;

            //act
            const result = searchMoviesForName(mockedMovies, uniqueTitle);

            //assert
            expect(result.length).toEqual(1)

        })
    })

});


describe('findMovieByID', () => {

    let mockedMovies: Movie[] = [];

    beforeEach(() => {
        mockedMovies =  [
            {
                "id": "207856",
                "title": "2001: A Space Odyssey",
                "image": "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABd8H3yW84QBZ7bXkGlzSmeKjpS8gUEV7S_zPN4qVOX7mQ0SNpyHlOkh0WGGlrARjpOZPFlZXyU4t5E8phADO9rq80g.jpg?r=43c",
                "synopsis": "While investigating the appearance of mysterious monoliths throughout the universe, two astronauts battle their ship&#39;s intelligent computer system.<br><b>New on 2020-06-18</b>",
                "rating": "8.3",
                "type": "movie",
                "released": "1968",
                "runtime": "2h28m",
                "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABbjUFYCF6qVcxBNZXhL_HIGhaNXLosDyYyg6v3WP9H1FLsGMBtJx1uy9R8pEMgz0gGzPLlcF9lgH5WjpB_jl4p6DmlDw.jpg?r=43c",
                "unogsdate": "2020-06-18",
                "imdbid": "tt0062622",
                "download": "0"
            },
            {
                "id": "215318",
                "title": "Ace Ventura: When Nature Calls",
                "image": "https://occ-0-1926-41.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABd2CXwqVibqQ6X3SBFL7ADm7zczv73tuNxCW2zDwA-4SEW5Nkdfnybwn5MXfVE1fHv4IBxtpYBkjF3EZQoqHKWkHkA.jpg?r=914",
                "synopsis": "Ace travels to the jungles of Africa to recover a rare white bat. But if he fails, a war with the violent Wachootoo tribe is sure to follow.<br><b>New on 2020-06-18</b>",
                "rating": "6.4",
                "type": "movie",
                "released": "1995",
                "runtime": "1h34m",
                "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABcAF9ZyRlOXNySt7A9ll31tYwgxUVPVtznPAqkz1L_R9iTfkyHQHK1w-3Kz0RKlXfl4KoWtU1nWkIO-dcjz1k-RYFE-6.jpg?r=914",
                "unogsdate": "2020-06-18",
                "imdbid": "tt0112281",
                "download": "1"
            },
            {
                "id": "234365",
                "title": "Against All Odds",
                "image": "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABQLRgUUEW1ERizQ0QVFwll7ldXWFoWGHUJ0wh3fJkp9URt6FSKMpSyitgnrc5qYufG_SHlL530HaRnxVZsyKL1uiDg.jpg?r=603",
                "synopsis": "An ex-football player agrees to track down a sleazy nightclub owner&#39;s mistress -- but when he finds the elusive woman in Mexico, he falls in love.<br><b>New on 2020-06-18</b>",
                "rating": "5.9",
                "type": "movie",
                "released": "1984",
                "runtime": "2h1m",
                "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABXIMhbibi12RBdfyOzXCHGhv-M4U5HJZxWy3P8C3b5HO-3yO_Nnpwr8RZP7fwzyMAv2XrMO-a6CXLVKFqi6JZYO9QYJU.jpg?r=603",
                "unogsdate": "2020-06-18",
                "imdbid": "tt0086859",
                "download": "1"
            },
            {
                "id": "18002692",
                "title": "American History X",
                "image": "https://occ-0-1926-41.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABet1M0odJ5zjsEwRnDSs-Kj_vi5WZC-9SH7lraHwERvmUuErGWd0neKOtWlcAi9tLlfJfwMJw4kraZsHyfWlG-PqnA.jpg?r=e28",
                "synopsis": "A neo-Nazi gets sent to prison for murder and comes out a changed man. But can he prevent his younger brother from following in his footsteps?<br><b>New on 2020-06-18</b>",
                "rating": "8.5",
                "type": "movie",
                "released": "1998",
                "runtime": "1h58m",
                "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABbHt3NoFOvz3C4W44SvcUcNulmJZV6LpOj0P81LNU1I5VmtJkFnLz9fiz_gA71vaDytjDqocpe1ay7FJS3-mn5kvS4VT.jpg?r=e28",
                "unogsdate": "2020-06-18",
                "imdbid": "tt0120586",
                "download": "0"
            },
            {
                "id": "60000880",
                "title": "28 Days",
                "image": "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABeHQaPEL1acetO9i5uD_8MOETxbr3yKdYzFhPzXmCRxB5yB6t2MD2JCJyvpi8BmPYfwtbwCZlTWWeA10-i-fbNE11Q.jpg?r=c89",
                "synopsis": "After her drunken antics result in property damage, an alcoholic journalist enters rehab -- and soon meets a fellow resident who changes her outlook.<br><b>New on 2020-06-18</b>",
                "rating": "6",
                "type": "movie",
                "released": "2000",
                "runtime": "1h43m",
                "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABXaIScp1HGn2XPV82ivaARKyiMXJ0XN6FlgOe3tj1NM08vOc-ZUqCeQoXUHIWD4paV4xL3lj_Ez9kpfNvvQZKxNnn_tW.jpg?r=c89",
                "unogsdate": "2020-06-18",
                "imdbid": "tt0191754",
                "download": "1"
            },
            {
                "id": "60001801",
                "title": "Alexandria ... Why?",
                "image": "https://occ-0-768-769.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABcWlKXh6yeFKLwyLydH8C-jX47eCNCHvEjj8nQv6tYdBvwcrpw-Kgp-cj7h5prXAsA3EoT4G_c2lfIVohhZfwkvWmQ.jpg?r=3c0",
                "synopsis": "Living in Alexandria during World War II, an Egyptian teen enamored with American films dreams of making it in Hollywood.<br><b>New on 2020-06-18</b>",
                "rating": "",
                "type": "movie",
                "released": "1979",
                "runtime": "2h11m",
                "largeimage": "https://occ-0-2705-2706.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABdjwMEYmUDZBWnbMrWNl9lu8KtfwIhsh1RtT8VCguNHO7ceB5Jq1fpbw5JT0wtJVABatokA8Ol086UwT9c5BR2mq5HrR.jpg?r=f8f",
                "unogsdate": "2020-06-18",
                "imdbid": "",
                "download": "0"
            },
            {
                "id": "60001803",
                "title": "Alexandria: Again and Forever",
                "image": "https://occ-0-768-769.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABcgOH1Rh9fuG_PQcc6gQSa74CutPlqlXPreH5-luT_yIRVjz1hyYLNXbdnpWUF1hBCtM6adwn41umryqveMJ05bqGA.jpg?r=8c7",
                "synopsis": "At the peak of his career, Yehia joins a hunger strike, becomes smitten and reckons with a creative crisis &mdash; but finds a new muse.<br><b>New on 2020-06-18</b>",
                "rating": "",
                "type": "movie",
                "released": "1989",
                "runtime": "1h49m",
                "largeimage": "https://occ-0-2705-2706.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABf0WbQTW_smSdXEqGX-XQMBiNv1EkjMc4X-8uwkwe3fwmK-4AKSAy5I6-ml0FsXAiePG2KHM8mgvX81DVrtCquqfRLJj.jpg?r=0a0",
                "unogsdate": "2020-06-18",
                "imdbid": "",
                "download": "0"
            },
            {
                "id": "60002273",
                "title": "Along Came a Spider",
                "image": "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABaulisu8YTwZbJxsJPQWfrX5ihDrsnTqAjomyyodEcbu4vNJQq-DkvhOqL3J3NPqAOb7dhPuw7h7ir_MreCL0Tzwhg.jpg?r=d2f",
                "synopsis": "When a girl is kidnapped from a prestigious prep school, a homicide detective takes the case, teaming up with young security agent.<br><b>New on 2020-06-18</b>",
                "rating": "6.4",
                "type": "movie",
                "released": "2001",
                "runtime": "1h43m",
                "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABZ51dexFQSmqtj9o7icMN9KQxOX_6X5iKom8Dve9pZuzhqEnx738Fu2u5X4_XLNpDIQsU7M-2weiz8HiL2RBIDekH42w.jpg?r=d2f",
                "unogsdate": "2020-06-18",
                "imdbid": "tt0164334",
                "download": "0"
            },
            {
                "id": "60020681",
                "title": "Angel Eyes",
                "image": "https://occ-0-114-116.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABadHdWYsV2FwW7UfqVlwomKGrJ7atIA-DJCREWLmaWY0dP6UkehYv6W_fwRy4alZkAZBdvQckeQiwGDaE_1bRKv3ww.jpg?r=915",
                "synopsis": "When a violent assault leaves her vulnerable, a streetwise Chicago cop receives help from a haunted loner who&#39;s struggling with traumas of his own.<br><b>New on 2020-06-18</b>",
                "rating": "5.6",
                "type": "movie",
                "released": "2001",
                "runtime": "1h42m",
                "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABW_zO3-lMcf3WjJ4Hki8uUAgMbAlCYj3TjQSNe6N9fGQdQFxaWSo48B6V6Vy8Hx8bhag-fxejhhVK7YNrKG6wh41o9Et.jpg?r=d58",
                "unogsdate": "2020-06-18",
                "imdbid": "tt0225071",
                "download": "0"
            },
            {
                "id": "60027713",
                "title": "2 Fast 2 Furious",
                "image": "https://occ-0-2717-360.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABcPADEjySdmCNxJrnX6owPs92K-0NGAtcYnmtpNLqNsQTXglXWyTSo9MDTxUKFAYoEILjhAM0gNbxzanxRGjCoCc5g.jpg?r=ae6",
                "synopsis": "It&#39;s a major double-cross when former cop Brian teams up with his ex-con buddy to transport a shipment of &#39;dirty&#39; money for a shady importer-exporter.<br><b>New on 2020-06-18</b>",
                "rating": "5.9",
                "type": "movie",
                "released": "2003",
                "runtime": "1h47m",
                "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABXWi8cWleYPwFmSJYzCdu4b8EalVrXaprZQvOgoA41Oau4m0IxZ8gEipVc0tNUxtdMaDT2zDMvNfJAeQU-MeXs3ky2l3.jpg?r=ae6",
                "unogsdate": "2020-06-18",
                "imdbid": "tt0322259",
                "download": "1"
            }]
    });

    describe('empty string as movie id', () => {
        test('returns undefined', () => {
            //arrange
            const emptyID = '';

            //act
            const result = findMovieByID(mockedMovies, emptyID);

            //assert
            expect(result).toBe(undefined);
        })
    });

    describe('non matching id', () => {
        test('returns undefined', () => {
            //arrange
            const nonMatchingId = 'some non existing id';

            //act
            const result = findMovieByID(mockedMovies, nonMatchingId);

            //assert
            expect(result).toBe(undefined);
        })
    });

    describe('matching id', () => {
        test('returns only the matching movie', () => {
            //arrange
            const matchingId = 'unique matching id';
            const similarMAtchingId = 'unique matching ip';
            mockedMovies[0].id = similarMAtchingId;
            mockedMovies[1].id = matchingId;

            //act
            const result = findMovieByID(mockedMovies, matchingId);

            //assert
            expect(result?.id).toEqual(matchingId);
        })
    });
});
