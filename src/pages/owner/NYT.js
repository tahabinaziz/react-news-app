
import ContentDiv from "../../components/ContentDiv";
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/AuthNavbar';
import './dashboard.css'
import { ArticleNYTApi } from '../../api/newsApi';

const NYT = () => {

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    const formatter = new Intl.DateTimeFormat("en-US", options);
    const [news, setNews] = useState([])
    const [handle, setHandle] = useState(true)
    const [type, setType] = useState('');

    const filteredDocs = handle ? news : news.filter(docs => docs.document_type === type);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(ArticleNYTApi);
            const json = await response.json();
            setNews(json.response.docs);
        }
        fetchData();
    }, []);

    return (
        <>
            <div className="flex h-screen justify-center bg-background w-full">
                <Navbar />
                <main className="flex-1">
                    <h2 className='text-center text-2xl -ml-4 mt-24'>Filter From NYT API</h2>
                    <div className="p-6 mb-8 ">
                        <ContentDiv >
                            <div className="flex flex-row ml-4 ">
                                <div className="flex flex-row">
                                    <div className="flex flex-col">
                                        <div class="relative max-w-sm">
                                            <select value={type} onChange={e => { setType(e.target.value); setHandle(false) }} id="countries" name="type" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                <option selected>Choose a Type</option>
                                                <option value="article">Article</option>
                                                <option value="multimedia">Multimedia</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
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
                                                    <th className="px-4 py-3">Source</th>
                                                    <th className="px-4 py-3">Headline</th>
                                                    <th className="px-4 py-3">Type</th>
                                                    <th className="px-4 py-3">Date</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white">
                                                {Array.isArray(filteredDocs) ? filteredDocs.map((item, index) => {
                                                    return (
                                                        <tr className="text-gray-700" key={index + 1}>
                                                            <td className="px-4 py-3 text-ms font-semibold border">{item.source}</td>
                                                            <td className="px-4 py-3 text-ms font-semibold border cursor-pointer"><a href={item.web_url}>{item.headline.main}</a> </td>
                                                            <td className="px-4 py-3 text-ms font-semibold border">{item.document_type.toUpperCase()}</td>
                                                            <td className="px-4 py-3 text-ms font-semibold border">{formatter.format(new Date(item.pub_date))}</td>
                                                        </tr>
                                                    )
                                                }) : []
                                                }
                                            </tbody>
                                        </table>
                                    </div>
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
export default NYT