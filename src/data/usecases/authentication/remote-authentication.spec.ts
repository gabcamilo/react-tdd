import { RemoteAuthentication } from './remote-authentication'
import { HttpPostClient } from '../../protocols/http/http-post-client'

describe('RemoteAuthentication ', () => {
  test('Should call HttpPostClient with the correct url', async () => {
    class HttpPostClientSpy implements HttpPostClient {
      // spy === mock class
      url?: string
      async post (url: string): Promise<void> {
        this.url = url
        return Promise.resolve()
      }
    }

    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy) // sut === system under test
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
