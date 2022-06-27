class GitHub {
    constructor() {
        this.client_id='e280dcb7bfe335d97877';
        this.client_secret='193182837739f3ed45d6bceabae95474c30c4a97';
        this.count=5;
        this.repo_sort='created: asc'
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile=await profileResponse.json();
        const repos=await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}