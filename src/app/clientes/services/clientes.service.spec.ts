import { TestBed, inject } from '@angular/core/testing';
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { ClienteService } from './clientes.service';

describe('Service: ClienteService', () => {
  let service: ClienteService = null;
  let backend: MockBackend = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [ MockBackend, BaseRequestOptions ]
        },
        ClienteService
      ]
    });
  });

  beforeEach(inject([ClienteService, MockBackend], (clienteService: ClienteService, mockBackend: MockBackend) => {
    service = clienteService;
    backend = mockBackend;
  }));

  // --------------------Example------------------------

  // const data = {
  //   'title': 'Book Title',
  //   'author': 'John Smith',
  //   'volumeId': '12345'
  // };

  // const books = {
  //   items: [
  //     {id: '12345', volumeInfo: {title: 'Title'}},
  //     {id: '67890', volumeInfo: {title: 'Another Title'}}
  //   ]
  // };

  // const queryTitle = 'Book Title';

  // it('should call the search api and return the search results', (done) => {
  //   backend.connections.subscribe((connection: MockConnection) => {
  //     const options = new ResponseOptions({
  //       body: JSON.stringify(books)
  //     });
  //     connection.mockRespond(new Response(options));
  //     expect(connection.request.method).toEqual(RequestMethod.Get);
  //     expect(connection.request.url).toEqual(`https://www.googleapis.com/books/v1/volumes?q=${queryTitle}`);
  //   });

  //   service
  //     .searchBooks(queryTitle)
  //     .subscribe((res) => {
  //       expect(res).toEqual(books.items);
  //       done();
  //     });
  // });

});
