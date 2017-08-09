import moxios from 'moxios';
import { setSearchTerm, addAPIData, getAPIDetails } from '../actionCreators';

const westWorld = {
  "title": "Westworld",
  "year": "2016–",
  "description": "Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite, no matter how noble or depraved, can be indulged without consequence.",
  "poster": "ww.jpg",
  "imdbID": "tt0475784",
  "trailer": "eX3u0IlBBO4",
  "rating": "8.6"
};

test('setSearchTerm', () => {
  expect(setSearchTerm('Orange')).toMatchSnapshot();
});

test('addAPIData', () => {
  expect(addAPIData(westWorld)).toMatchSnapshot();
});

test('getAPIDetails', (done) => {
  const dispatchMock = jest.fn();
  
  moxios.withMock(() => {
    getAPIDetails(westWorld.imdbID)(dispatchMock);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,
          response: westWorld
        })
        .then(() => {
          expect(request.url).toEqual(`http://localhost:3000/${westWorld.imdbID}`);
          expect(dispatchMock).toBeCalledWith(addAPIData(westWorld));
          done();
        });
    });
  });
});