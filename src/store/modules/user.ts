import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import { getToken, setToken, removeToken } from '@/utils/cookies'
import { login, logout } from '@/api/login'
import store from '@/store'

export interface IUserState {
    token: string
    name: string
}
@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements IUserState {
    public token = getToken() || ''
    public name = ''

    @Mutation
    private SET_TOKEN(token: string) {
        this.token = token
    }
    @Action({ rawError: true })
    public async Login(userInfo: { username: string, password: string,method:string }) {
        let { username, password, method } = userInfo
        username = username.trim()
        const { data } = await login({ username, password, method })
        setToken(data.accessToken)
        this.SET_TOKEN(data.accessToken)
    }
    @Action
    public ResetToken() {
        removeToken()
        this.SET_TOKEN('')
    }
    @Action
    public async LogOut() {
        if (this.token === '') {
            throw Error('LogOut: token is undefined!')
        }
        await logout()
        removeToken()
        this.SET_TOKEN('')
    }
}
export const UserModule = getModule(User)