
import ContentDiv from "../../components/ContentDiv";
import React, { useEffect, useState } from 'react';
import Search from '../../components/Search';
import Navbar from '../../components/Navbar';
import ReactPaginate from "react-paginate";
import './style.css'
import { dataLimit } from '../../utiles/constant'
import {  ArticleNewsApi } from '../../api/newsApi';
import NavbarAuth from "../../components/Navbar";
const News = () => {

    const [news, setNews] = useState([])
    const [page, setPage] = useState(0);
    const [msg,setMsg] = useState("")
    const [showbutton, setShowButton] =useState(false)

    const dataPerPage = dataLimit;
    const numberOfData = page * dataPerPage;

    const totalPages = Math.ceil(news.length / dataPerPage);

    /**Filter Keywords here */
    const searchData = async (keyword,from,to,sortBy) => {

        const article = await ArticleNewsApi(keyword,from,to,sortBy)
        setNews(article.data.articles)
        setShowButton(true)

    }
    const changePage = ({ selected }) => {
        setPage(selected);
    };

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
        timeZone: "UTC"
    };

    const formatter = new Intl.DateTimeFormat("en-US", options);
    return (
        <>
            <div className="flex h-screen justify-center bg-background w-full">
            <Navbar/>
            <main className="flex-1">
            <h2 className='text-center text-2xl -ml-4 mt-24'>Keyword From News API</h2>               
                    <div className="p-6 mb-8 ">

                     
                        <ContentDiv >
                            <div className="flex flex-row ml-4 ">
                            <Search searchData={searchData}/>
                              
                            </div>
                        </ContentDiv>
                    </div>
                    <div className=" bg-background -mt-16 p-6">
                        <ContentDiv>
                            {/* Table */}
                      
                            <section className="flex flex-col  container ml-2  mx-4">

                                <div className="w-full mt-8 overflow-hidden rounded-lg shadow-lg ">
                                    <div className="w-full overflow-x-auto">
                                        <table className="w-full border-spacing">
                                            <thead>
                                                <tr className="text-md font-semibold tracking-wide text-left text-white bg-primary uppercase border-b border-gray-600">
                                                <th className="px-4 py-3">Author</th>
                                                <th className="px-4 py-3">Title</th>
                                                <th className="px-4 py-3">Date</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white">
                                            {Array.isArray(news) ? news.slice(
                                numberOfData,
                                numberOfData + dataPerPage
                            ).map((item, index) => {
                                return (
                                                    
                                                    <tr className="text-gray-700" key={index+1}>
                                                         <td className="px-4 py-3 text-ms font-semibold border">{item.author}</td>
                                                         <td className="px-4 py-3 text-ms font-semibold border cursor-pointer">
                                                           <a href={item.url}>{item.title}</a>
                                                            </td>
                                                         <td className="px-4 py-3 text-ms font-semibold border">{formatter.format(new Date(item.publishedAt)) }</td>
                                                    
                                                </tr>
                                                
                                                )
                                              
                                                
                                               }
                                              
                                               ):[]
                                               
                                               }



                                            </tbody>
                                        </table>

                                        
                                    </div>
                                    <ContentDiv classes={'mb-8'}> 
                                {showbutton ?
                            <ReactPaginate
                                previousLabel={"Previous"}
                                nextLabel={"Next"}
                                pageCount={totalPages}
                                onPageChange={changePage}
                                containerClassName={"navigationButtons"}
                                previousLinkClassName={"previousButton"}
                                nextLinkClassName={"nextButton"}
                                disabledClassName={"navigationDisabled"}
                                activeClassName={"navigationActive"}
                            />
                        :null}
                                </ContentDiv>
                                </div>
                               
                                

<div>
    
</div>
                            </section>
                            
                        </ContentDiv>
                        
                    </div>
                </main>
            </div>
        </>
    )
}
export default News