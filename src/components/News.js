import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  articles=[
    {
      "source": { "id": "google-news-au", "name": "Google News (Australia)" },
      "author": "Ben Horne, Tim Michell",
      "title": "WATCH: Marnus screamer adds to South African woes",
      "description": "Time to pack the tinsel away because the true cricket fan&rsquo;s Christmas has arrived &mdash; the Boxing Day Test at the MCG!",
      "url": "https://www.dailytelegraph.com.au/sport/cricket/boxing-day-cricket-2nd-test-australia-vs-south-africa-from-the-mcg-all-the-scores-and-analysis/news-story/8828bfa5944677b6260288ea919a35ab",
      "urlToImage": "https://content.api.news/v3/images/bin/39da821df0fa97115b647f1a75ca6d75",
      "publishedAt": "2022-12-26T02:26:15+00:00",
      "content": "Former South African skipper Shaun Pollock says South Africa can create doubt in Australia’s minds if it reaches 15 overs without losing a wicket. \r\nPat Cummins won the toss at the MCG and elected to… [+7497 chars]"
    },
    {
      "source": { "id": "bbc-sport", "name": "BBC Sport" },
      "author": null,
      "title": "'£10 worth of salmon?' England's cricketers play Secret Santa",
      "description": "Freya Davies, Alice Davidson-Richards, Nat Sciver and Katherine Brunt share what they would buy their teammates for Secret Santa.",
      "url": "http://www.bbc.co.uk/sport/cricket/64050783",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/BAD6/production/_128103874_secretsanta.png",
      "publishedAt": "2022-12-25T09:22:25.4026845Z",
      "content": "The build-up to Christmas for England's women is slightly different - and warmer - to usual. \r\nThey played the last game of their eight-match series against the West Indies on 22 December, and arrive… [+5362 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]
  constructor(){
    super();
    console.log("I am a constructor from News component");
    this.state={
        articles: this.articles,
        loading: false
    }
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>       
        <div className='row'>
        {this.state.articles.map((element)=>{
          return <div className='col-md-4' key={element.url}>
          <NewsItem title={element.title} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>
        })}           
        </div>
      </div>
    )
  }
}

export default News
