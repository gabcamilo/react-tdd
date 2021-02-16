import { RemoteAuthentication } from './remote-authentication'
import { HttpPostClientSpy } from '../../test/mock-http-client'

describe('RemoteAuthentication ', () => {
  test('Should call HttpPostClient with the correct url', async () => {
    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy) // sut === system under test
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
