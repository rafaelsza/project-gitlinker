import api from './api';

class App {
    constructor() {
        this.respositories = [];

        this.formElm = document.getElementById('form');
        this.inputElm = document.querySelector('form input');
        this.buttonElm = document.querySelector('form button');
        this.listElm = document.getElementById('list');
        this.bodyElm = document.querySelector('body');

        this.registerEvents();
    }

    registerEvents() {
        this.formElm.onsubmit = event => this.addRepositories(event);
    }

    async addRepositories(event) {
        event.preventDefault();
        this.listElm.innerHTML = '';

        let userInput = this.inputElm.value;

        if (userInput.length === 0) {
            return;
        }

        this.loading(true);
        try{
            const response = await api.get(`/users/${userInput}/repos`);

            /* response.data.forEach(repo => {
                this.respositories.push(repo);
            }); */

            this.respositories = response.data.map(repo => {
                return {
                    name: repo.name,
                    description: repo.description,
                    html_url: repo.html_url
                }
            });

            console.log(this.respositories);

            this.render();
        } catch(error) {
            alert('Usuário inexistente!');
        }

        this.loading(false);
    }

    render() {
        this.respositories.forEach(repo => {
            let itemElm = document.createElement('li');

            let titleElm = document.createElement('strong');
            titleElm.appendChild(document.createTextNode(repo.name));

            let descriptionElm = document.createElement('p');
            descriptionElm.appendChild(document.createTextNode(repo.description == null ? 'No description.' : repo.description));

            let linkElm = document.createElement('a');
            linkElm.setAttribute('target', '_blank');
            linkElm.setAttribute('href', repo.html_url);

            linkElm.appendChild(titleElm);
            linkElm.appendChild(descriptionElm);
            itemElm.appendChild(linkElm);

            this.listElm.appendChild(itemElm);
        });
    }

    loading(value) {
        if (value == true) {
            this.bodyElm.style.cursor = 'wait';
            this.formElm.style.cursor = 'wait';
            this.buttonElm.style.cursor = 'wait';
        } else {
            this.bodyElm.style.cursor = 'default';
            this.formElm.style.cursor = 'default';
            this.buttonElm.style.cursor = 'default';
        }
    }

}

new App();