import Heading from "../../common/Heading"
import "./style.scss"
import BlogJSON from "../../../store/Blogs.json"

import Post1 from "../../../assets/posts/post1.jpg"
import Post2 from "../../../assets/posts/post2.jpg"
import Post3 from "../../../assets/posts/post3.jpg"
import { getImage } from "../../../assets/helpers"

import BlogItem from "./BlogItem"



function Blog(props) {
    const imgs = [Post1, Post2, Post3]
    return (
        <main className="blog-page-wrapper">
            <Heading title="Blog" size={1.5} />

            <div className="blog-page-content">


                {
                    BlogJSON.map((blog_item, index) => {
                        return (
                            <BlogItem
                                key={index}
                                img={getImage(imgs, index)}
                                id={blog_item.id}
                                subtitle={blog_item.subtitle}
                                title={blog_item.title}
                                author={blog_item.author}
                                date={blog_item.date}
                                desc1={blog_item.desc1}
                            />
                        )
                    })
                }


            </div>

        </main>
    );
}

export default Blog;