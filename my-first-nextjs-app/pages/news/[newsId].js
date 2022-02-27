import {useRouter} from 'next/router';

// our-domain.com/news/detail/
function DetailPage(){
    const router = useRouter();
    const newsId = router.query.newsId;  //Holds concrete value in the url for the newsId dynamic segment
    //newsId can be sent to the database to request info on that paricular news id
    return <h1>Detail</h1>
}

export default DetailPage;
