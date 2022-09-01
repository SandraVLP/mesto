export default class UserInfo {
    constructor({userName,userAbout}) {
        this._userNameSelector = document.querySelector(userName);
        this._userAboutSelector = document.querySelector(userAbout);

    }

    getUserInfo() {
        return {name: this._userNameSelector.textContent,
            about: this._userAboutSelector.textContent   
        }

    }

    setUserInfo(data) {
        this._userNameSelector.textContent = data.username;
        this._userAboutSelector.textContent = data.about;

    }
}