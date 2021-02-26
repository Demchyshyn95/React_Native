export class newsService {

    async getNews(page = 1, pageSize = 20) {
        try {
            const url = `http://api.blog.testing.singree.com/?page=${ page }&limit=${ pageSize }`;
            const response = await fetch(url);
            const data = await response.json();
            return data;

        } catch (e) {
            console.log(e);
        }
    }

}
