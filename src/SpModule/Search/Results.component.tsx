import React, {useState, useEffect} from 'react';
import { PoemDto } from '../sound-poems.models';
import { List, Banner, Spin, Pagination } from '@douyinfe/semi-ui';
import './Results.component.scss';
import SpFacade from '../sound-poems.facade';
import { Link } from 'react-router-dom';
interface ResultsProps {
    results: PoemDto[];
}
export default function ResultsComponent(props: ResultsProps) {

    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedResults, setPaginatedResults] = useState<PoemDto[][]>([])

    const maxPageSize = 8;

    const { 
            selectUserHasSearched,
            selectSearchLoading,
            setCurrentPoem
        } = SpFacade();


    const createLinesPreview = (lines: string[]) => {
        const slicedLines = lines.slice(0, 3);
        return slicedLines.join(`\n`).concat('...');
    }

    const emptyResults = () => {
        return selectUserHasSearched ? 
        <Banner
            fullMode={false}
            type="warning"
            closeIcon={null}
            description="No poems found for given search term."
        /> : 
        <span className="sp-unsearched">(Search Poem DB to begin)</span>
    }

    const onPageChange = (currentPage: number) => {
        setCurrentPage(currentPage);
        console.log(currentPage);
    }
    useEffect(() => {
        const paginateResults = () => {
            const paginatedResultArr: PoemDto[][] = [];
            if (props.results?.length > maxPageSize) {
                console.log(props.results.length);
                for (let i = 0; i < props.results.length; i += maxPageSize) {
                    paginatedResultArr.push(props.results.slice(i, 12 + i).filter(Boolean));
                }
                setPaginatedResults(paginatedResultArr);
            }
        }
        paginateResults()
    }, [props.results])

    const results = () => <div className="sp-search-results">
    { props.results.length ? 
    <>
        <List
            dataSource={paginatedResults[currentPage - 1]}
            renderItem={r => 
                {   
                    const uniqueLinkId = `/author,title/${r.author.split(' ').join('%20')};${r.title.split(' ').join('%20')}`
                    const poemObject: PoemDto = {
                            title: r.title, 
                            author: r.author, 
                            lines: r.lines, 
                            linecount: r.linecount
                        }
                    return (
                        <Link 
                            to={uniqueLinkId}
                            onClick={() => setCurrentPoem(poemObject)}
                        >
                            <List.Item className="sp-search-result-item">
                                <h2 className="sp-search-result-item--title">{r.title ? r.title : '(Untitled Work)'}</h2>
                                <h3 className="sp-search-result-item--author">
                                    <span className="sp-by-span">by </span> 
                                    <span className="sp-author-span">{r.author ? r.author : 'Unknown Author'}</span>
                                </h3>
                                <p className="sp-search-result-item--preview">{createLinesPreview(r.lines)}</p>
                            </List.Item>
                        </Link>
                    )
                }
            }
        />
        <div className="sp-pagination-wrapper">
           <Pagination 
                total={props.results.length} 
                onPageChange={onPageChange}
                pageSize={maxPageSize} 
                style={{ marginBottom: 12 }}>
            </Pagination>
        </div>
    </> :
    emptyResults()
    }
    </div> 

    const loading = () => 
        <div className="sp-search-loading">
            <Spin size="small"/>
            <span>Loading Poem DB Data</span>
        </div>;
    
    console.log(paginatedResults[currentPage - 1])
    console.log(paginatedResults)
    return (
        <div className="sp-search-results-wrapper">
            { selectSearchLoading ? loading() : results() }
        </div>
    );
    
}