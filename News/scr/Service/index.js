export class newsService {

    async getNews(page, pageSize) {
        try {
            const url = `http://api.blog.testing.singree.com/?page=${page}&limit=${pageSize}`;
            const response = await fetch(url);
            const data = await response.json();
            return data;

        } catch (e) {
            console.log(e);
        }
    }

}
