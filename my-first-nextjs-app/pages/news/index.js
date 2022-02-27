// our-domain.com/news

import Link from 'next/link'
import { Fragment } from "react"; // import Fragment from react

//Creating a components
function NewsPage(){
    return <Fragment>
        <h1>News</h1>
        <ul>
            <li><Link href='/news/Chemicals'>Chemicals</Link></li>
            <li><Link href='/news/Paracetamol'>Paracetamol</Link></li>
            <li><Link href='/news/Crack'>Crack</Link></li>
        </ul>
        </Fragment>
}

export default NewsPage; //Must be exported the component, so Next.js can find it